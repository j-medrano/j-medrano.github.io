import React from 'react'
import linkedin from '../images/linkedin.png'
import github from '../images/github_icon.png'


function Links() {
  return (
    <div>
      <div className="flex pt-10 gap-x-4">
        <a href="https://www.linkedin.com/in/jonathan-medrano-97b320272/">
          <img src={linkedin} className="w-6 h-6 transition duration-200 hover:brightness-200" alt="linkedin"/>

        </a>
        <a href="https://github.com/j-medrano" >
          <img src={github} className="w-6 h-6 transition duration-200 hover:brightness-200" alt="github"/>
        </a>

      </div>
    </div>
  )
}

export default Links
