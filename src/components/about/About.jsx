/*Module before File after */
import { useState, useEffect, React } from 'react'

import './About.css'
import about from '../../assets/about.jpeg'
const About = () => {

    return (
        <div className='flex flex-col text-white  w-full '>
            <div className='flex w-full   items-center justify-center'>
                <h1 className='pt-32 max-sm:pt-0 text-5xl w-full text-center'>
                    About me
                </h1>
            </div>
            <div id='about' className='flex  flex-row w-full items-center justify-center gap-20 max-md:flex-col pt-32 pb-40 px-32 max-md:px-10 max-md:pt-20 font-jm'>

                <img src={about} alt="" className=' brightness-90 max-w-[26rem] max-md:max-w-[20rem] w-full rounded-2xl home-img2 ' />
                <div className='w-fit flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white text-3xl'>
                            Ye, this is me
                        </h1>
                        <h1 className='text-white text-2xl'>
                            And I'm about to tell you about myself
                        </h1>


                    </div>

                    <div className='text-gray-400 flex gap-2 flex-col ' >
                        <h1 className='text-white text-xl '>
                            Real name : <span className='text-blue-400'>Vo Quang Vu</span>
                        </h1>
                        <h1 className='text-white text-xl'>
                            Nickname : <span className='text-blue-400'>winky</span>
                        </h1>
                        <h1 className='text-white text-xl'>
                            DOB : <span className='text-blue-400'>November 9, 2006</span>
                        </h1>

                        <h1 className='text-white text-xl'>
                            Horoscope : <span className='text-blue-400'>🦂</span>
                        </h1>

                        <h1 className='text-white text-xl'>
                            High school : <span className='text-blue-400'>Tran Phu High School HCMC (HCMUT in the future)</span>
                        </h1>
                        <h1 className='text-white text-xl'>
                            Personality : <span className='text-blue-400'>Quite introvert but willing to help you 🫂</span>
                        </h1>
                        <div className='items-center justify-center flex'>
                            <a href="https://ngl.link/threalwinky">
                            <button className='text-black p-2 bg-blue-400 rounded-xl px-10 mt-5 hover:bg-blue-500'>Know more about me !</button>
                            </a>
                            
                        </div>
                    </div>




                </div>
            </div>
        </div>

    )
}

export default About