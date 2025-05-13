import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import ShowcaseSection from "./sections/ShowcaseSection";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Blog from "./sections/Blog";
import Agency from "./sections/Agency";
import Footer from "./sections/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <ShowcaseSection />
      <Blog />
      <Agency />
      <Testimonials />
      <Contact />
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
};

export default App;
