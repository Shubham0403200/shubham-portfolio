import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/gallery/footer";
// import Navbar from "@/components/gallery/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
          {/* <Navbar />   */}
          <FloatingNav/>
          <main>
            {children}
          </main>
          <Footer />
      </>
  );
}
