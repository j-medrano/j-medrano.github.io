import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import profile_pic from "./images/profile_pic.jpeg"; // Ensure you have the correct path
import linkedin from "./images/linkedin.png"
import github from "./images/github_icon.png"
import lamby from "./images/lamby.png"
import call_center from "./images/call_center.png"



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
  
      // ✅ "About" is visible → Enable About, disable Experience
      if (aboutTop < window.innerHeight && aboutBottom > 0) {
        setIsAboutHovered(true);
        setIsExperienceHovered(false);
      } 
      // ✅ "Experience" is visible but "About" isn't → Enable Experience
      else if (experienceTop < window.innerHeight * 0.75) {
        setIsAboutHovered(false);
        setIsExperienceHovered(true);
      } else {
        setIsExperienceHovered(false);
      }
  
      // ✅ "Projects" hit 50% of the viewport → Hide "Experience" ONLY
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
                  className={`group flex flex-row items-center text-[#64748b] pb-6 pt-12 hover:scale-105 transition-all duration-200 ${isAboutHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isAboutHovered ? "text-[#e5e7eb] w-20 border-white" : " w-8 hover:text-[#e5e7eb]"}`}></div>
                  <p className={`pl-4 font-semibold tracking-wide transition-all duration-150 group-hover:text-[1.25rem]  ${isAboutHovered ? "text-[1.25rem]" : "text-sm hover:text-[#e5e7eb]"}`}>
                    ABOUT
                  </p>
                </a>
              </li>

              <li>
                <a 
                  onClick={() => scrollToSection(experienceRef)}
                  className={`group flex flex-row items-center text-[#64748b] pb-6 hover:scale-105 transition-all duration-200 ${isExperienceHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isExperienceHovered ? "text-[#e5e7eb] w-20 border-white" : "w-8 hover:text-[#e5e7eb]"}`}>

                  </div>
                  <p className={`pl-4 font-semibold tracking-wide transition-all duration-150 group-hover:text-[1.25rem] ${isExperienceHovered ? "text-[1.25rem]" : "hover:text-[#e5e7eb] text-sm"}`}>
                    EXPERIENCE
                  </p>
                </a>
              </li>

              <li>
              <a 
                  onClick={() => scrollToSection(projectRef)}
                  className={`group flex flex-row items-center text-[#64748b] pb-6 hover:scale-105 transition-all duration-200 ${isProjectHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isProjectHovered ? "text-[#e5e7eb] w-20 border-white" : "w-8 hover:text-[#e5e7eb]"}`}>

                  </div>
                  <p className={`pl-4 font-semibold tracking-wide transition-all duration-150 group-hover:text-[1.25rem] ${isProjectHovered ? "text-[1.25rem]" : "hover:text-[#e5e7eb] text-sm"}`}>
                    PROJECTS
                  </p>
                </a>
              </li>
            </ul>

          </div>
          {/* these are the images links */}
          <div className="flex flex-row  justify-start  w-full pt-10 gap-x-4">
            <img src={linkedin} className="w-6 h-6 transition duration-200 hover:brightness-200" alt="linkedin"/>
            <img src={github} className="w-6 h-6 transition duration-200 hover:brightness-200" alt="github"/>

          </div>
        </div>

        {/* Right Side - Scrollable Content bg-[#0f0f14]*/}
        <div className="lg:w-[70%] lg:ml-auto  text-white min-h-screen pr-6  lg:pl-48 text-[#94a3b8] sm:relative">
          {/* about section */}
          <div className="text-2xl pl-6 lg:hidden lg:block sticky bg-[#0f172a] mt-24  py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm">ABOUT</div>

          <div ref={aboutRef} className="lg:text-7xl border lg:h-18 opacity-0">**ABOUT Fix Later*</div>

          <div  className=" mb-22 text-[#94a3b8] lg:mb-28 font-light">
            <p className=" ml-6 text-lg lg:text:lg">
                  Hi, I'm Jonathan—a recent Computer Science graduate from Sacramento State University with a passion for building innovative software solutions. During my studies, 
                  I got hands-on experience in full-stack development and system analysis, particularly through my senior project where I built an e-commerce platform from scratch. 
                  That project taught me how to design user-friendly interfaces, optimize database performance, and implement secure authentication.
                </p>
                <p className="ml-6 text-lg lg:text-lg pt-4">
                In the past, I also worked as a substitute paraprofessional, assisting students and collaborating with teachers. 
                Since many teachers were not tech-savvy and most schools required students to use laptops, 
                I gained experience troubleshooting computer issues and navigating technology. 
                This role not only sharpened my technical troubleshooting skills but also improved my ability to communicate complex concepts in a clear, approachable way.
                </p>
                <p className="ml-6 text-lg lg:text-lg pt-4">
                  In my free time, I love exploring new technologies and continuously learning through personal projects. 
                  I’m excited to bring my technical skills and collaborative spirit to a professional environment where I can contribute to creating high-quality, accessible solutions.  
                </p>
          </div>

          {/* experience section */}
          <div className="text-2xl pl-6  sm:block lg:hidden sticky bg-[#0f172a]/90 mt-24 py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm transition-opacity duration-300">
              Experience
          </div>          
          <div ref={experienceRef} className="lg:text-7xl border lg:h-20 opacity-0">Experience</div>
          


          <div className="flex flex-col  ">

              <div className="flex flex-col sm:flex-col lg:flex-row group cursor-pointer pl-6 py-8 lg:hover:bg-[#1f2937]/60 transition-all duration-300 rounded-md">
                <div className="lg:w-1/4  lg:pr-20 whitespace-nowrap text-[#64748b] font-medium text-sm pt-1">Jan - Dec 2024</div>
                <div className="flex flex-col lg:w-3/4">
                  <div className="lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-2xl">
                    Full Stack Developer • The Lamby Shop
                  </div>
                  <div className="text-[#64748b] mb-2">
                    Senior Project
                  </div>
                  <div className="text-[#94a3b8]">
                    Worked collaboratively with a team of students to develop an innovative e-commerce platform tailored to a client's needs. As a group, we showcased teamwork and technical skills.               
                  </div>
                  <div className="mt-4 cursor-pointer text-xs lg:!text-base">
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3 ">
                      JavaScript
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Node.js
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Stripe
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Tailwind CSS
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      AWS Amplify
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      React
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      DynamoDB
                    </p>
                  </div>
 

                </div>
              </div>

              <div className="flex flex-col sm:flex-col lg:flex-row group cursor-pointer pl-6 py-8 lg:hover:bg-[#1f2937]/60 transition-all duration-300 rounded-md">
                <div className="lg:w-1/4  lg:pr-20 whitespace-nowrap text-[#64748b] font-medium text-sm pt-1">Aug - Dec 2022</div>
                <div className="flex flex-col lg:w-3/4">
                  <div className="lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-2xl mb-2">
                    Developer • Call Center Visualization Project
                  </div>
                  <div className="text-[#94a3b8]">
                  Worked collaboratively with a team of students to develop a high-performance, 
                  real-time visual web application for a call center.                 
                  </div>
                  <div className="mt-4 cursor-pointer text-xs lg:!text-base  ">
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      JavaScript
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Node.js
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Express.js
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      HTML
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      MongoDB
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Mongoose
                    </p>

                  </div>
 

                </div>
              </div>
              


          </div>

          <a 
          className="hover:text-[#5eead4] text-[#e2e8f0] font-medium text-lg lg:pl-18 pl-8" 
          href="https://j-medrano.github.io/files/resume.pdf">
            View Full Resumé
          </a>


          {/* project sections */}
          <div className="text-2xl pl-6  sm:block lg:hidden sticky bg-[#0f172a] mt-24 py-6 top-0 z-30 text-[#e2e8f0] backdrop-blur-sm transition-opacity duration-300">
              Projects
          </div>          
          <div ref={projectRef} className="lg:text-7xl border lg:h-20 opacity-0 ">
            Projects
          </div>

              {/* start of the block */}
              <div className="flex flex-col sm:flex-col lg:flex-row group cursor-pointer pl-6 py-8 lg:hover:bg-[#1f2937]/60 transition-all duration-300 rounded-md">

                {/* this is for the larger screens */}
                <div className="hidden lg:block">
                  <img src={lamby} alt="lamby" className="w-40 h-24 rounded lg:mr-20 "/>
                </div>

                {/* this is the second col */}
                <div className="flex flex-col lg:w-3/4">
                  
                  <div className="lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-2xl mb-2">
                    The Lamby Shop
                  </div>
                  
                  <div className="text-[#94a3b8]">
                  The project focused on creating a user-friendly shopping and management experience to help our client showcase and sell her handmade crochet pieces, 
                  demonstrating both technical expertise and teamwork.                
                  </div>

                  <div className="mt-4 cursor-pointer text-xs lg:!text-base">
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3 ">
                      JavaScript
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Node.js
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Stripe
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Tailwind CSS
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      AWS Amplify
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      React
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      DynamoDB
                    </p>
                  </div>

                </div>
                {/* this is for mobile screens */}
                <div className="lg:hidden pt-4">
                  <img src={lamby} alt="lamby" className="w-40 h-24 rounded lg:mr-20 "/>
                </div>
              {/* end of the whole block */}
              </div>

              {/* start of the block */}
              <div className="flex flex-col sm:flex-col lg:flex-row group cursor-pointer pl-6 py-8 lg:hover:bg-[#1f2937]/60 transition-all duration-300 rounded-md">

                {/* this is for the larger screens */}
                <div className="hidden lg:block">
                  <img src={call_center} alt="lamby" className="w-40 h-24 rounded lg:mr-20 "/>
                </div>

                {/* this is the second col */}
                <div className="flex flex-col lg:w-3/4">
                  
                  <div className="lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-2xl mb-2">
                    Call Center Visualization Project
                  </div>
                  
                  <div className="text-[#94a3b8]">
                    The project delivered dynamic reports for management to monitor employee performance, 
                    showcasing both technical expertise and effective teamwork.             
                  </div>

                  <div className="mt-4 cursor-pointer text-xs lg:!text-base  ">
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      JavaScript
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Node.js
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Express.js
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      HTML
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      MongoDB
                    </p>
                    <p className=" border border-[#5eead4]/10 px-2 py-1 rounded-full bg-[#5eead4]/10 text-[#5eead4] inline-block w-fit mr-4 my-2 lg:!px-3">
                      Mongoose
                    </p>

                  </div>

                </div>
                {/* this is for mobile screens */}
                <div className="lg:hidden pt-4">
                  <img src={call_center} alt="lamby" className="w-40 h-24 rounded lg:mr-20 "/>
                </div>
                {/* end of the whole block */}
                </div>



              

          <footer className="flex justify-center items-center mt-32 pb-12 text-[#94a3b8] text-xs ">© 2025 Jonathan Medrano. Built with passion and code.</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
