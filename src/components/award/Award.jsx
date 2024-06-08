/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Slide } from 'react-slideshow-image';

import './Award.css'
import 'react-slideshow-image/dist/styles.css'
import awards1 from '../../assets/awards/awards1.jpeg'
import awards2 from '../../assets/awards/awards2.jpeg'
import awards3 from '../../assets/awards/awards3.jpeg'
import awards4 from '../../assets/awards/awards4.jpeg'
import awards5 from '../../assets/awards/awards5.jpeg'
import awards6 from '../../assets/awards/awards6.jpeg'
import awards7 from '../../assets/awards/awards7.jpeg'
import awards8 from '../../assets/awards/awards8.jpeg'
const Award = () => {
    const awards = [
        {
            src: awards1,
            description: "Second prize in the 6th student competition with startup ideas (6th sv_startup)",
            brightness: "100"
        },
        {
            src: awards2,
            description: "Second prize in the 6th student competition with startup ideas (sixth sv_startup)",
            brightness: "100"
        },
        {
            src: awards3,
            description: "Third prize in city level competition of Informatics For Youth 2023",
            brightness: "100"
        },
        {
            src: awards4,
            description: "Consolation prize in national level competition of Informatics For Youth 2023",
            brightness: "100"
        },
        {
            src: awards5,
            description: "Second prize for excellent students at the city level in IT subject",
            brightness: "100"
        },
        {
            src: awards6,
            description: 'Third prize for excellent students at the city level in Maths subject',
            brightness: "90"
        },
        
        {
            src: awards7,
            description: 'Bronze medal in the competition "Design, application, manufacturing"',
            brightness: "100"
        },
        {
            src: awards8,
            description: 'Consolation prize in city level competition Hours of Code 2024',
            brightness: "100"
        },
    
    ]

    const indicators = (index) => (<div className="indicator p-[0.3rem] bg-slate-300 rounded-full cursor-pointer  hover:bg-slate-400 m-2"></div>);


    return (
        <div id='awards'>
            <div className='flex flex-col text-white max-xl:mt-32  w-full h-fit'>
                <div className='flex w-full   items-center justify-center'>
                    <h1 className='pt-32 max-sm:pt-0 text-5xl w-full text-center'>
                        Awards
                    </h1>
                </div>
                <div className='w-full  flex items-center justify-center mt-10'>
                <p className='text-xl px-10 text-center max-w-[42rem]'>
                    High school years are such great times for me to challenge myself. I have been involved in many competitions and attained accomplishments.
                </p>
                </div>
               
                <div className='p-10'>
                    <Slide indicators={indicators} >
                        {awards?.map((award, id) => (
                            <div key={id} className="flex text-xl flex-col p-14 items-center">
                                <img src={award.src} className={`home-img2 bri ${"brightness-" + award.brightness}  max-w-[22rem] rounded-2xl max-md:max-w-[20rem] aspect-[9/13]`} alt="" />
                                <span className='pt-10 text-center max-w-[40rem]'>{award.description}</span>
                             

                            </div>
                        ))}

                    </Slide>
                </div>

            </div>
        </div>
    )
}

export default Award