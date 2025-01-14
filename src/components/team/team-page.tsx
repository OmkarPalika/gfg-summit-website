import { useState, useEffect, useCallback } from "react";
import { TeamGrid } from "./team-grid";
import { TeamHeader } from "./team-header";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils/animations";
import { MetaTags } from "@/components/seo/meta-tags";
import { coreTeam, advisoryBoard, mentorsPanel } from "@/lib/data/team-data";

// Reusable Sidebar component
const SidebarNav = ({ sections, activeSection, onButtonClick }: any) => (
  <aside className="w-1/4 hidden lg:block pr-8">
    <nav className="sticky top-24 z-10">
      <ul className="space-y-4">
        {sections.map((section: any) => (
          <li key={section.id}>
            <button
              onClick={() => onButtonClick(section.id)}
              className={`w-full text-left px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-emerald-50"
              }`}
              aria-label={`Go to ${section.title}`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

// Main TeamPage component
export function TeamPage() {
  const [activeSection, setActiveSection] = useState<string>("advisory-board");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const sections = [
    {
      title: "Advisory Board",
      id: "advisory-board",
      team: advisoryBoard,
    },
    {
      title: "Mentors' Panel",
      id: "mentors-panel",
      team: mentorsPanel,
    },
    {
      title: "Core Team",
      id: "core-team",
      team: coreTeam,
    },
  ];

  // Throttle scroll event handling for performance optimization
  const handleScroll = useCallback(() => {
    if (isScrolling) {
      setIsScrolling(false);
      return;
    }

    // Check if each section is in the viewport
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      }
    });
  }, [isScrolling, sections]);

  // Debounce the scroll event listener using requestAnimationFrame
  useEffect(() => {
    const scrollHandler = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  // Handle button click to scroll to the section with offset
  const handleButtonClick = (id: string) => {
    setActiveSection(id);
    setIsScrolling(true);
    const section = document.getElementById(id);
    if (section) {
      // Add a 80px offset from the top when scrolling
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <MetaTags
        title="Our Team | GFG SC Summit 2025"
        description="Meet the dedicated team behind GFG SC Summit 2025. Learn about our Advisory Board and Core Team working to create an exceptional experience."
      />

      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <SidebarNav
            sections={sections}
            activeSection={activeSection}
            onButtonClick={handleButtonClick}
          />
          
          {/* Main Content */}
          <div className="flex-1">
            <motion.div {...fadeInUp} className="text-center mb-8">
              <TeamHeader />
            </motion.div>

            {sections.map((section, index) => (
              <section key={index} id={section.id} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  {section.title}
                </h2>
                <TeamGrid team={section.team} />
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
