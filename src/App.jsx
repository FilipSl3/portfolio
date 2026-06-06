import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Background from "./components/Background.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import GithubGrid from "./components/GithubGrid.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Ambient background sits at z-0; everything else is layered above. */}
        <Background />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-[1]">
          <Hero />
          <AboutMe />
          <FeaturedProjects />
          <ExperienceTimeline />
          <GithubGrid />
          <ContactSection />
          <Footer />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}
