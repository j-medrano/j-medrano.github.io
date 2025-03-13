import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import profile_pic from "./images/profile_pic.jpeg"; // Ensure you have the correct path
import LeftSection from "./components/LeftSection";
import Links from "./components/Links";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";


import { useRef, useState, useEffect } from "react";
function App() {
  const aboutRef = useRef(null); // Create a reference for "About" section
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isExperienceHovered, setIsExperienceHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const checkSectionVisibility = () => {
    const aboutSection = aboutRef.current;
    const experienceSection = experienceRef.current;
    const projectSection = projectRef.current;
  
    if (aboutSection && experienceSection && projectSection) {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const aboutBottom = aboutSection.getBoundingClientRect().bottom;
      const experienceTop = experienceSection.getBoundingClientRect().top;
      const projectTop = projectSection.getBoundingClientRect().top;
  
      // "About" is visible → Enable About, disable Experience
      if (aboutTop < window.innerHeight && aboutBottom > 0) {
        setIsAboutHovered(true);
        setIsExperienceHovered(false);
      } 
      // "Experience" is visible but "About" isn't → Enable Experience
      else if (experienceTop < window.innerHeight * 0.75) {
        setIsAboutHovered(false);
        setIsExperienceHovered(true);
      } else {
        setIsExperienceHovered(false);
      }
  
      // "Projects" hit 50% of the viewport → Hide "Experience" ONLY
      if (projectTop < window.innerHeight * 0.5) {
        setIsExperienceHovered(false);
        setIsProjectHovered(true);
      } else {
        setIsProjectHovered(false);
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", checkSectionVisibility);
    return () => {
      window.removeEventListener("scroll", checkSectionVisibility);
    };
  }, []);
  
  return (
    <Router>
      <Header title="Jonathan Medrano" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-36 lg:pr-20 lg:pt-12">
        {/* Left Side - Fixed Profile Section */}
        <div className="lg:w-2/5 lg:h-screen lg:fixed top-20 left-20 flex flex-col items-center lg:items-start px-6 pt-8 font-roboto text-white">
          <img
            src={profile_pic}
            className="w-44 h-44 object-cover rounded-full border-1 border-white shadow-lg mb-8" alt="Profile"
          />
          <div className="items-start flex flex-col ">

            <LeftSection/>

            <ul className="text-left hidden lg:block cursor-pointer">
              <li>
                <div
                  onClick={() => scrollToSection(aboutRef)}
                  className={`group flex flex-row items-center text-[#64748b] pb-6 pt-12 hover:scale-105 transition-all duration-200 ${isAboutHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isAboutHovered ? "text-[#e5e7eb] w-20 border-white" : " w-8 hover:text-[#e5e7eb]"}`}></div>
                  <p className={`pl-4 font-semibold tracking-wide transition-all duration-150 group-hover:text-[1.25rem]  ${isAboutHovered ? "text-[1.25rem]" : "text-sm hover:text-[#e5e7eb]"}`}>
                    ABOUT
                  </p>
                </div>
              </li>

              <li>
                <div
                  onClick={() => scrollToSection(experienceRef)}
                  className={`group flex flex-row items-center text-[#64748b] pb-6 hover:scale-105 transition-all duration-200 ${isExperienceHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isExperienceHovered ? "text-[#e5e7eb] w-20 border-white" : "w-8 hover:text-[#e5e7eb]"}`}>

                  </div>
                  <p className={`pl-4 font-semibold tracking-wide transition-all duration-150 group-hover:text-[1.25rem] ${isExperienceHovered ? "text-[1.25rem]" : "hover:text-[#e5e7eb] text-sm"}`}>
                    EXPERIENCE
                  </p>
                </div>
              </li>

              <li>
              <div 
                  onClick={() => scrollToSection(projectRef)}
                  className={`group flex flex-row items-center text-[#64748b] pb-6 hover:scale-105 transition-all duration-200 ${isProjectHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isProjectHovered ? "text-[#e5e7eb] w-20 border-white" : "w-8 hover:text-[#e5e7eb]"}`}>

                  </div>
                  <p className={`pl-4 font-semibold tracking-wide transition-all duration-150 group-hover:text-[1.25rem] ${isProjectHovered ? "text-[1.25rem]" : "hover:text-[#e5e7eb] text-sm"}`}>
                    PROJECTS
                  </p>
                </div>
              </li>
            </ul>

          </div>
          {/* these are the images links */}
          <div className="w-full flex justify-start">
              <Links/>
          </div>
        </div>

        {/* Right Side - Scrollable Content bg-[#0f0f14]*/}
        <div className="lg:w-[70%] lg:ml-auto  text-white min-h-screen pr-6  lg:pl-48 text-[#94a3b8] sm:relative">

          {/* about section */}
          <div className="text-2xl pl-14 lg:hidden lg:block sticky bg-[#0f172a] mt-24 py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm">ABOUT</div>
          <div ref={aboutRef} className="lg:text-7xl border lg:h-18 opacity-0">**ABOUT Fix Later*</div>

          <About/>

          {/* experience section */}
          <div className="text-2xl pl-14  sm:block lg:hidden sticky bg-[#0f172a]/90 mt-24 py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm transition-opacity duration-300">
              Experience
          </div>          
          <div ref={experienceRef} className="lg:text-7xl border lg:h-20 opacity-0">Experience</div>
          
          <Experience/>

          {/* project sections */}
          <div className="text-2xl pl-14  sm:block lg:hidden sticky bg-[#0f172a] mt-24 py-6 top-0 z-30 text-[#e2e8f0] backdrop-blur-sm transition-opacity duration-300">
              Projects
          </div>          
          <div ref={projectRef} className="lg:text-7xl border lg:h-40 opacity-0 ">
            Projects
          </div>

          <Projects />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
