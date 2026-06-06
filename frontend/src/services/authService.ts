import { buildApiUrl } from "@/services/api";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  emailVerified: boolean;
};

export type AuthResponse = {
  user: AuthUser;
  emailVerification?: {
    required: boolean;
    expiresIn: string;
    devUrl: string;
  };
};

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = LoginPayload & {
  name: string;
};

const USER_KEY = "project_f_user";

function buildJsonRequestInit(init: RequestInit = {}) {
  const headers = new Headers(init.headers ?? {});

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return {
    ...init,
    credentials: "include" as RequestCredentials,
    headers,
  };
}

export async function fetchWithAuth(path: string, init: RequestInit = {}, retry = true) {
  const response = await fetch(buildApiUrl(path), buildJsonRequestInit(init));

  if (response.status !== 401 || typeof window === "undefined" || !retry) {
    return response;
  }

  try {
    await refreshSession();
  } catch {
    return response;
  }

  const retryResponse = await fetch(buildApiUrl(path), buildJsonRequestInit(init));
  if (retryResponse.status === 401) {
    logoutUser();
  }

  return retryResponse;
}

async function requestAuth(
  endpoint: "/auth/login" | "/auth/register",
  payload: LoginPayload | RegisterPayload
) {
  let response: Response;

  try {
    response = await fetch(buildApiUrl(endpoint), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Could not reach the login server. Check that your phone is on the same Wi-Fi.");
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Authentication request failed");
  }

  saveAuth(data);
  return data as AuthResponse;
}

export function loginUser(payload: LoginPayload) {
  return requestAuth("/auth/login", payload);
}

export function registerUser(payload: RegisterPayload) {
  return requestAuth("/auth/register", payload);
}

export function saveAuth(data: AuthResponse) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
}

export function getStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const user = localStorage.getItem(USER_KEY);
  return user ? (JSON.parse(user) as AuthUser) : null;
}

export function logoutUser() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(USER_KEY);

  void fetch(buildApiUrl("/auth/logout"), {
    method: "POST",
    credentials: "include",
  });
}

export async function refreshSession() {
  const response = await fetch(buildApiUrl("/auth/refresh"), {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    logoutUser();
    throw new Error(data.message || "Session refresh failed");
  }

  saveAuth(data);
  return data as AuthResponse;
}

export async function getProfile() {
  const response = await fetchWithAuth("/profile");

  if (response.status === 401) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Unauthorized");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to load profile");
  }

  return data;
}
