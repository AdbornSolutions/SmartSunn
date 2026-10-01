import Navbar from "./Navbar";
import Footer from "./Footer";
// Shared frame for every inner page: Navbar + page content + Footer
function PageLayout({ children }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default PageLayout;
