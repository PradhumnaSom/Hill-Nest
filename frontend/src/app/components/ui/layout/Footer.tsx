import Container from "@/app/components/ui/ui/Container";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-950 via-green-950/40 to-gray-950 text-gray-400 pt-14 pb-8"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌿</span>
              <h2 className="text-2xl font-bold text-white">
                Hill<span className="text-green-400">Nest</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              A peaceful mountain homestay near Siliguri, offering warmth, comfort, and stunning valley views.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Siliguri, West Bengal, India
            </p>
          </div>

          {/* Contact block */}
          <div className="text-sm space-y-2">
            <p className="text-white font-semibold mb-3 uppercase tracking-widest text-xs">
              Contact
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span> +91 9876543210
            </p>
            <p className="flex items-center gap-2">
              <span>✉️</span> hillnest@email.com
            </p>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} HillNest Homestay. All rights reserved.</p>
          <p>Designed with ❤️ in the mountains</p>
        </div>
      </Container>
    </footer>
  );
}
