import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

const Agency = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".agency-content",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#agency",
          start: "top center+=100"
        }
      }
    );
  });

  return (
    <section id="agency" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <TitleHeader 
          title="Join Our Agency"
          sub="🚀 Let's Build Something Amazing Together"
        />
        
        <div className="agency-content mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Technes Agency - Where Innovation Meets Excellence
            </h2>
            <p className="text-white-50 text-lg">
              We're a team of passionate developers, designers, and creative minds working together to deliver exceptional digital solutions. Join us in creating impactful projects that push the boundaries of what's possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white-50">Custom Web Development Solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white-50">Modern UI/UX Design</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white-50">Full-Stack Development Services</p>
              </div>
            </div>
            <a
              href="https://technestagency.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Visit Agency Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>          <div className="relative group">
            <div className="aspect-video rounded-xl overflow-hidden card-border">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop"
                alt="Agency Projects"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* Glow Effects */}
            <div className="absolute -bottom-6 -right-6 size-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-50" />
            <div className="absolute -top-6 -left-6 size-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
