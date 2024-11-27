import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/gallery/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
          <FloatingNav/>
          <main>
            {children}
          </main>
          <Footer />
      </>
  );
}
