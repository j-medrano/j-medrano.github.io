import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import profile_pic from "./images/profile_pic.jpeg"; // Ensure you have the correct path
import linkedin from "./images/linkedin.png"
import github from "./images/github_icon.png"
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null); // Create a reference for "About" section
  const experienceRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Router>
      <Header title="Jonathan Medrano" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:px-36 lg:pt-20">
        {/* Left Side - Fixed Profile Section */}
        <div className="lg:w-2/5 lg:h-screen lg:fixed top-20 left-20 flex flex-col items-center lg:items-start px-8 pt-8 font-roboto text-white">
          <img
            src={profile_pic}
            className="w-44 h-44 object-cover rounded-full border-1 border-white shadow-lg" alt="Profile"
          />
          <div className="items-start flex flex-col ">
            <p className="text-4xl lg:text-6xl pt-8 pb-4 text-[#e2e8f0]">
              Jonathan Medrano
            </p>
            <p className="text-lg lg:text-2xl pb-4 text-[#e2e8f0]">
              Entry-Level Software Developer
            </p>
            <p className="text-left text-[#94a3b8] lg:w-3/4 break-words">
              I am a recent Computer Science graduate and passionate software
              developer, actively seeking new challenges and job opportunities.
            </p>

            <ul className="text-left hidden lg:block cursor-pointer">
              <li>
                <a 
                  onClick={() => scrollToSection(aboutRef)}
                  className="group flex flex-row items-center text-[#64748b] pb-6 pt-12 hover:scale-105 hover:text-[#e5e7eb] transition-all duration-200">
                  <div className="w-8 border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white"></div>
                  <p className="pl-4 font-semibold text-sm tracking-wide transition-all duration-150 group-hover:text-lg">
                    ABOUT
                  </p>
                </a>
              </li>

              <li>
                <a 
                  onClick={() => scrollToSection(experienceRef)}
                  className="group flex flex-row items-center text-[#64748b] pb-6 hover:scale-105 hover:text-[#e5e7eb] transition-all duration-200">
                  <div className="w-8 border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white"></div>
                  <p className="pl-4 font-semibold text-sm tracking-wide transition-all duration-150 group-hover:text-lg">
                    EXPERIENCE
                  </p>
                </a>
              </li>

              <li>
                <a className="group flex flex-row items-center text-[#64748b] hover:scale-105 hover:text-[#e5e7eb] transition-all duration-200">
                  <div className="w-8 border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white"></div>
                  <p className="pl-4 font-semibold text-sm tracking-wide transition-all duration-150 group-hover:text-lg">
                    PROJECTS
                  </p>
                </a>
              </li>
            </ul>

          </div>
          {/* these are the images links */}
          <div className="flex flex-row  justify-start  w-full pt-10 gap-x-4">
            <img src={linkedin} className="w-8 h-8 transition duration-200 hover:brightness-200" alt="linkedin"/>
            <img src={github} className="w-8 h-8 transition duration-200 hover:brightness-200" alt="github"/>

          </div>
        </div>

        {/* Right Side - Scrollable Content bg-[#0f0f14]*/}
        <div className="lg:w-[55%] lg:ml-auto  text-white min-h-screen pr-8  lg:pl-8 text-[#94a3b8] sm:relative">
          {/* about section */}
          <div className="text-2xl pl-8 lg:hidden lg:block sticky bg-[#0f172a]/90 mt-24  py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm">ABOUT</div>
          <div ref={aboutRef} className="lg:text-7xl border lg:h-20 opacity-0">**ABOUT Fix Later*</div>

          <div  className="lg:text-7xl mb-22 text-[#94a3b8] lg:mb-28">
            <p className=" ml-8 text-2xl pt-2">
                  Hi, I'm Jonathan—a recent Computer Science graduate from Sacramento State University with a passion for building innovative software solutions. During my studies, 
                  I got hands-on experience in full-stack development and system analysis, particularly through my senior project where I built an e-commerce platform from scratch. 
                  That project taught me how to design user-friendly interfaces, optimize database performance, and implement secure authentication.
                </p>
                <p className="ml-8 text-2xl pt-2">
                  I also worked as a substitute paraprofessional, helping students and teachers troubleshoot computer issues and navigate technology. 
                  This role not only sharpened my technical troubleshooting skills but also improved my ability to communicate complex concepts in a clear, approachable way.
                </p>
                <p className="ml-8 text-2xl pt-2">
                  In my free time, I love exploring new technologies and continuously learning through personal projects. 
                  I’m excited to bring my technical skills and collaborative spirit to a professional environment where I can contribute to creating high-quality, accessible solutions.  
                </p>
          </div>

          {/* experience section */}
          <div ref={experienceRef} className="lg:text-7xl">** Experience Fix Later**
            {/* <p className="ml-8 text-2xl pt-2">
                Hi, I'm Jonathan—a recent Computer Science graduate from Sacramento State University with a passion for building innovative software solutions. During my studies, 
                I got hands-on experience in full-stack development and system analysis, particularly through my senior project where I built an e-commerce platform from scratch. 
                That project taught me how to design user-friendly interfaces, optimize database performance, and implement secure authentication.
              </p>
              <p className="ml-8 text-2xl pt-2">
                I also worked as a substitute paraprofessional, helping students and teachers troubleshoot computer issues and navigate technology. 
                This role not only sharpened my technical troubleshooting skills but also improved my ability to communicate complex concepts in a clear, approachable way.
              </p>
              <p className="ml-8 text-2xl pt-2">
                In my free time, I love exploring new technologies and continuously learning through personal projects. 
                I’m excited to bring my technical skills and collaborative spirit to a professional environment where I can contribute to creating high-quality, accessible solutions.  
              </p> */}

          </div>
          
          <div className="flex flex-col">
              <div className="flex flex-row pb-12">
                <div>year</div>
                <div>Discription</div>
              </div>
              
              <div className="flex flex-row pb-12">
                <div>year</div>
                <div>Discription</div>
              </div>

          </div>
          {/* project sections */}
        </div>
      </div>
    </Router>
  );
}

export default App;
