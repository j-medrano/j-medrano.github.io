import logo from './logo.svg';
import profile_pic from './images/profile_pic.jpeg'
import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header title="Jonathan Medrano"/>

    <div className='flex flex-col lg:flex-row items-center lg:items-start lg:px-48 lg:pt-28'>

      <div className="text-center">


        <div className="flex flex-col items-center lg:items-start px-8 font-roboto">
        <img src={profile_pic} className="w-40 h-40 object-cover rounded-full border-1 border-white shadow-lg" alt="Profile" />
          <div className='items-start flex flex-col'>
            <p className='text-4xl lg:text-6xl  pt-8 pb-4 text-[#e2e8f0]'>
              Jonathan Medrano
            </p>
            <p className='text-lg lg:text-2xl pb-4 text-[#e2e8f0]'>
              Entry-Level Software Developer
            </p>

            <p className='text-left  text-[#94a3b8] lg:w-1/2 break-words'>
              I am a recent Computer Science graduate and passionate software developer, actively seeking new challenges and job opportunities.
            </p>




            <ul className='text-left hidden lg:block cursor-pointer'>
              <li>
                <a className='flex flex-row items-center text-[#64748b] pb-6 pt-12'>
                  <div className='w-8  border-solid  border border-[#64748b]'></div>
                  <p className='pl-4 font-semibold text-sm tracking-wide'>ABOUT</p>
                </a>
              </li>
              <li>
              <a className='flex flex-row items-center text-[#64748b] pb-6'>
                  <div className='w-8  border-solid  border border-[#64748b]'></div>
                  <p className='pl-4 font-semibold text-sm tracking-wide'>EXPERIENCE</p>
                </a>
              </li>
              <li>
              <a className='flex flex-row items-center text-[#64748b]'>
                  <div className='w-8  border-solid  border border-[#64748b]'></div>
                  <p className='pl-4 font-semibold text-sm tracking-wide'>PROJECTS</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='lg:text-7xl'>
        **fix later***
      </div>
    </div>

    </Router>

  );
}

export default App;
