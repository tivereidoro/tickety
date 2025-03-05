import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 *
 * @HomepageLayout
 */
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex-grow">{children}</div>
      <Footer />
    </>
  );
}
