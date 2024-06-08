/*Module before File after */
import { useState, useEffect, React } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Introduction from '../../components/introduction/Introduction'
import About from '../../components/about/About'
import Award from '../../components/award/Award'
import Hobby from '../../components/hobby/Hobby'
import Skill from '../../components/skill/Skill'
import Project from '../../components/project/Project'

// import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='w-full 
bg-gradient-to-tr

   from-slate-800
  via-slate-700
   to-gray-900
   
   from-20%
   via-50%
   to-90%

   max-sm:h-full
   font-jm
   scroll-smooth
   '>
                <Navbar />

                <Introduction />
                <About />
                <Hobby />
                <Award />
                <Skill />
                <Project/>
            </div>
        </div>
    )
}

export default Home