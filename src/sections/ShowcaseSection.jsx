import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "ryde",
    title: "Ryde - On-Demand Rides App",
    description:
      "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.",
    image: "/images/project1.png",
    bg: "#F0F4FF",
    live: "https://ryde-live-app.netlify.app",
    github: "https://github.com/yourusername/ryde-app",
  },
  {
    id: "library",
    title: "The Library Management Platform",
    description:
      "Manage library books, members, and lending history with an intuitive dashboard.",
    image: "/images/project2.png",
    bg: "#FFEFDB",
    live: "https://library-platform.netlify.app",
    github: "https://github.com/yourusername/library-app",
  },
  {
    id: "yc-directory",
    title: "YC Directory - A Startup Showcase App",
    description:
      "Discover top startups with this YC directory made for founders and investors.",
    image: "/images/project3.png",
    bg: "#FFE7EB",
    live: "https://yc-directory.netlify.app",
    github: "https://github.com/yourusername/yc-directory",
  },
  {
    id: "yc-directory",
    title: "YC Directory - A Startup Showcase App",
    description:
      "Discover top startups with this YC directory made for founders and investors.",
    image: "/images/project3.png",
    bg: "#FFE7EB",
    live: "https://yc-directory.netlify.app",
    github: "https://github.com/yourusername/yc-directory",
  },

  {
    id: "yc-directory",
    title: "YC Directory - A Startup Showcase App",
    description:
      "Discover top startups with this YC directory made for founders and investors.",
    image: "/images/project3.png",
    bg: "#FFE7EB",
    live: "https://yc-directory.netlify.app",
    github: "https://github.com/yourusername/yc-directory",
  },
  {
    id: "yc-directory",
    title: "YC Directory - A Startup Showcase App",
    description:
      "Discover top startups with this YC directory made for founders and investors.",
    image: "/images/project3.png",
    bg: "#FFE7EB",
    live: "https://yc-directory.netlify.app",
    github: "https://github.com/yourusername/yc-directory",
  },
  {
    id: "yc-directory",
    title: "YC Directory - A Startup Showcase App",
    description:
      "Discover top startups with this YC directory made for founders and investors.",
    image: "/images/project3.png",
    bg: "#FFE7EB",
    live: "https://yc-directory.netlify.app",
    github: "https://github.com/yourusername/yc-directory",
  },
];

const categories = ["All", "Web App", "Mobile App", "Backend"];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCategory, setActiveCategory] = useState("All");
  
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4">
        <TitleHeader 
          title="Featured Projects"
          sub="🚀 Showcasing My Best Work"
        />
        
        <div className="flex justify-center gap-4 mb-8 mt-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500 bg-white group relative"
              style={{ backgroundColor: project.bg }}
            >
              <div className="overflow-hidden aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
