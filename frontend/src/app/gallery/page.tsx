import { redirect } from "next/navigation";

export const metadata = {
  title: "Gallery | HillNest",
};

export default function GalleryPage() {
  redirect("/#gallery");
}
