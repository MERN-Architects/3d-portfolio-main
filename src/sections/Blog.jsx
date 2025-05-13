import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

const blogPosts = [
  {
    id: 1,
    title: "Building Responsive Web Apps with React and Tailwind",
    excerpt: "Learn how to create beautiful, responsive web applications using React and Tailwind CSS...",
    date: "May 10, 2025",
    readTime: "5 min read",
    category: "Development",
    image: "/images/project1.png",
  },
  {
    id: 2,
    title: "3D Graphics in Web Development with Three.js",
    excerpt: "Discover how to integrate stunning 3D graphics in your web projects using Three.js...",
    date: "May 5, 2025",
    readTime: "8 min read",
    category: "3D Graphics",
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "Modern Backend Development with Node.js",
    excerpt: "Explore best practices for building scalable backend services using Node.js...",
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Backend",
    image: "/images/project3.png",
  }
];

const Blog = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".blog-card",
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#blog",
          start: "top center+=100",
        }
      }
    );
  });

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4">
        <TitleHeader 
          title="Latest Blog Posts"
          sub="✍️ Sharing Knowledge & Experiences"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="blog-card group cursor-pointer card-border rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-white/10">
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
