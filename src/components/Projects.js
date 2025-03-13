import React from 'react'
import lamby from '../images/lamby.png'
import call_center from '../images/call_center.png'

function Projects() {
  return (
    <div className='pl-8'>
{/* start of the block */}
      <div className="flex flex-col sm:flex-col lg:flex-row group cursor-pointer pl-6 py-8 lg:hover:bg-[#1f2937]/60 transition-all duration-300 rounded-md">

        {/* this is for the larger screens */}
        <div className="hidden lg:block">
          <img src={lamby} alt="lamby" className="w-40 h-24 rounded lg:mr-20 "/>
        </div>

        {/* this is the second col */}
        <div className="flex flex-col lg:w-3/4">
          
        <a href="https://github.com/zzzkevon/the-lamby-shop" className="flex items-center whitespace-nowrap lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-lg lg:text-2xl mb-2 ">
            <span>The Lamby Shop</span>
            <span className="text-3xl sm:text-base md:text-base lg:text-base xl:text-base transition-transform ease-in-out duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-1 inline-block will-change-transform pl-0 pt-0 lg:pl-2 lg:pt-2 font-extrabold">↗</span>
          </a>
          
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
          
            <div className="flex items-center whitespace-nowrap lg:group-hover:text-[#5eead4] transition-all duration-300 hover:text-[#5eead4] text-[#e2e8f0] font-medium text-lg lg:text-2xl mb-2 ">
                Call Center Visualization Project
              <span className="text-3xl sm:text-base md:text-base lg:text-base xl:text-base transition-transform ease-in-out duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-1 inline-block will-change-transform  pl-0 pb-0 lg:pl-2 lg:pt-2 font-extrabold">↗</span>
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
    </div>
  )
}

export default Projects
