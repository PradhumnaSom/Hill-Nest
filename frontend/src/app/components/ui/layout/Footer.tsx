import Container from "@/app/components/ui/ui/Container";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-950 text-gray-400 py-12"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white">
              HillNest Homestay
            </h2>

            <p className="mt-2">
              Siliguri, West Bengal, India
            </p>
          </div>

          <div className="text-center md:text-right">
            <p>+91 9876543210</p>
            <p>hillnest@email.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
