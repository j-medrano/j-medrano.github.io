import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import profile_pic from "./images/profile_pic.jpeg"; // Ensure you have the correct path
import linkedin from "./images/linkedin.png"
import github from "./images/github_icon.png"
import { useRef, useState, useEffect } from "react";
function App() {
  const aboutRef = useRef(null); // Create a reference for "About" section
  const experienceRef = useRef(null);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isExperienceHovered, setIsExperienceHovered] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
const checkSectionVisibility = () => {
  const aboutSection = aboutRef.current;
  const experienceSection = experienceRef.current;

  if (aboutSection && experienceSection) {
    // Check if "About" section is in view
    if (
      aboutSection.getBoundingClientRect().top < window.innerHeight &&
      aboutSection.getBoundingClientRect().bottom > 0
    ) {
      setIsAboutHovered(true);
      setIsExperienceHovered(false); // Disable hover effect on Experience when About is visible
    } else {
      setIsAboutHovered(false);
    }

    // Check if "Experience" section is in view
    if (
      experienceSection.getBoundingClientRect().top < window.innerHeight/2 &&
      experienceSection.getBoundingClientRect().bottom > 0
    ) {
      if (!isAboutHovered) {
        setIsExperienceHovered(true); // Only highlight Experience if About is not highlighted
      }
    } else {
      setIsExperienceHovered(false);
    }


  }
  console.log('about ' + isAboutHovered)

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
                  className={`group flex flex-row items-center text-[#64748b] pb-6 pt-12 hover:scale-105 transition-all duration-200 ${isAboutHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`w-8 border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isAboutHovered ? "text-[#e5e7eb] w-20 border-white" : "hover:text-[#e5e7eb]"}`}></div>
                  <p className={`pl-4 font-semibold text-sm tracking-wide transition-all duration-150 group-hover:text-[1.25rem]  ${isAboutHovered ? "text-[1.25rem]" : "hover:text-[#e5e7eb]"}`}>
                    ABOUT
                  </p>
                </a>
              </li>

              <li>
                <a 
                  onClick={() => scrollToSection(experienceRef)}
                  className={`group flex flex-row items-center text-[#64748b] pb-6 hover:scale-105 transition-all duration-200 ${isExperienceHovered ? "text-[#e5e7eb]" : "hover:text-[#e5e7eb]"}`}>
                  <div className={`w-8 border border-[#64748b] transition-all duration-150 group-hover:w-20 group-hover:border-white ${isExperienceHovered ? "text-[#e5e7eb] w-20 border-white" : "hover:text-[#e5e7eb]"}`}>

                  </div>
                  <p className={`pl-4 font-semibold text-sm tracking-wide transition-all duration-150 group-hover:text-[1.25rem] ${isExperienceHovered ? "text-[1.25rem]" : "hover:text-[#e5e7eb]"}`}>
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
            <img src={linkedin} className="w-6 h-6 transition duration-200 hover:brightness-200" alt="linkedin"/>
            <img src={github} className="w-6 h-6 transition duration-200 hover:brightness-200" alt="github"/>

          </div>
        </div>

        {/* Right Side - Scrollable Content bg-[#0f0f14]*/}
        <div className="lg:w-[55%] lg:ml-auto  text-white min-h-screen pr-8  lg:pl-8 text-[#94a3b8] sm:relative">
          {/* about section */}
          <div className="text-2xl pl-8 lg:hidden lg:block sticky bg-[#0f172a]/90 mt-24  py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm">ABOUT</div>

          <div ref={aboutRef} className="lg:text-7xl border lg:h-32 opacity-0">**ABOUT Fix Later*</div>

          <div  className="lg:text-7xl text-lg mb-22 text-[#94a3b8] lg:mb-28">
            <p className=" ml-8 text-lg pt-2 ">
                  Hi, I'm Jonathan—a recent Computer Science graduate from Sacramento State University with a passion for building innovative software solutions. During my studies, 
                  I got hands-on experience in full-stack development and system analysis, particularly through my senior project where I built an e-commerce platform from scratch. 
                  That project taught me how to design user-friendly interfaces, optimize database performance, and implement secure authentication.
                </p>
                <p className="ml-8 text-lg pt-2">
                  I also worked as a substitute paraprofessional, helping students and teachers troubleshoot computer issues and navigate technology. 
                  This role not only sharpened my technical troubleshooting skills but also improved my ability to communicate complex concepts in a clear, approachable way.
                </p>
                <p className="ml-8 text-lg pt-2">
                  In my free time, I love exploring new technologies and continuously learning through personal projects. 
                  I’m excited to bring my technical skills and collaborative spirit to a professional environment where I can contribute to creating high-quality, accessible solutions.  
                </p>
          </div>

          {/* experience section */}
          <div className="text-2xl pl-8  sm:block lg:hidden sticky bg-[#0f172a]/90 mt-24 py-6 top-0 z-20 text-[#e2e8f0] backdrop-blur-sm">
              Experience
          </div>          
          <div ref={experienceRef} className="lg:text-7xl border lg:h-20 opacity-0">Experience</div>
          {/* <div ref={experienceRef} className="lg:text-7xl">** Experience Fix Later**</div> */}
          


          <div className="flex flex-col  ">

              <div className="flex flex-col sm:flex-col lg:flex-row group cursor-pointer px-8 py-8 lg:hover:bg-[#1f2937]/60 transition-all duration-300 rounded-md">
                <div className="lg:w-1/4 mb-2 lg:mb-0 lg:pr-20 whitespace-nowrap text-[#64748b] font-medium text-sm">Jan - Dec 2024</div>
                <div className="flex flex-col lg:w-3/4">
                  <div className="lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-lg">
                    Full Stack Developer • The Lamby Shop
                  </div>
                  <div>Senior Project</div>
                  <div>
                    Worked collaboratively with a team of students to develop an innovative e-commerce platform tailored to a client's needs. 
                    The project focused on creating a user-friendly shopping experience to help our client showcase and sell her handmade crochet pieces, 
                    demonstrating both technical expertise and teamwork.                  
                  </div>
                  <div className="mt-4 cursor-pointer">
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2 ">
                      JavaScript
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2">
                      Node.js
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2">
                      Stripe
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2">
                      Tailwind CSS
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2">
                      AWS Amplify
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2">
                      React
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mr-4 my-2">
                      DynamoDB
                    </p>
                  </div>
 

                </div>
              </div>

              <div className="flex flex-col sm:flex-col lg:flex-row  cursor-pointer pl-8">
                <div className="lg:w-1/4 mb-2 lg:mb-0 lg:pr-20 whitespace-nowrap text-[#64748b]">Jan - Dec 2024</div>
                <div className="flex flex-col lg:w-3/4">
                  <div>Full Stack Developer • The Lamby Shop</div>
                  <div>Senior Project</div>
                  <div>
                    Worked collaboratively with a team of students to develop an innovative e-commerce platform tailored to a client's needs. 
                    The project focused on creating a user-friendly shopping experience to help our client showcase and sell her handmade crochet pieces, 
                    demonstrating both technical expertise and teamwork.                  
                  </div>
                  <div className="mt-4 cursor-pointer">
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit ">
                      JavaScript
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mx-4 my-2">
                      Node.js
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mx-4 my-2">
                      Stripe
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mx-4 my-2">
                      Tailwind CSS
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mx-4 my-2">
                      AWS Amplify
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit mx-4 my-2">
                      React
                    </p>
                    <p className=" border border-[#5eead4]/20 px-2 rounded-full bg-[#5eead4]/20 text-[#5eead4] inline-block w-fit">
                      DynamoDB
                    </p>
                  </div>
 

                </div>
              </div>
              
              <div className="flex flex-row pb-12">
                <div>year</div>
                <div>Discription</div>
              </div>

          </div>
          {/* project sections */}


          <footer>Copy Right 2025</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
