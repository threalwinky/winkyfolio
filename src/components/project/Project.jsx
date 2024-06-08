/*Module before File after */
import { useState, useEffect, React } from 'react'

import './Project.css'
import ai from '../../assets/projects/ai.jpeg'
import cgirl from '../../assets/projects/cgirl.png'
import createen from '../../assets/projects/createen.png'
import dotfile from '../../assets/projects/dotfile.png'
import ew from '../../assets/projects/ew.png'
import mathmystic from '../../assets/projects/mathmystic.png'
import sr from '../../assets/projects/sr.png'
import srweb from '../../assets/projects/sr-web.png'
import tpr from '../../assets/projects/tpr.png'
import wiboy from '../../assets/projects/wiboy.png'
import windy from '../../assets/projects/windy.png'

const Project = () => {

    const projects = [
        {
            src: mathmystic,
            tag: ["React Js", "Tailwind CSS", "Firebase", "Firestore", "E-commerce", "Website"],
            name: "Mathmystic",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/mathmystic",
            time: "Feb 2024"
        },

        {
            src: createen,

            name: "Createen",
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/createen",
            time: "May 2023"
        },
        {
            src: ew,
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            name: "Emilia World",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/emiliaworld",
            time: "Feb 2023"
        },
        {
            src: ai,
            tag: ["Fifty One", "Jupyter Notebook", "Python", "Machine Learning", "AI"],
            name: "AI Challenge",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/AI_challenge",
            time: "Dec 2023",
        },
        {
            src: cgirl,
            tag: ["Python", "Tkinter", "Python", "Software"],
            name: "CGirl 2.0",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/CGirl",
            time: "Jun 2022"
        },

        {
            src: wiboy,
            tag: ["React Js", "Ionic", "Tailwind CSS", "Software", "Website"],
            name: "Wiboy",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/wiboy",
            time: "Mar 2024"
        },
        {
            src: dotfile,
            tag: ["Vim Script", "System", "Vim", "C++", "Code Editor"],
            name: "Dotfiles",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/dotfiles",
            time: "Dec 2021"
        },


        {
            src: sr,
            tag: ["Flutter", "System", "Arduino", "Firebase", "Software", "Phone app"],
            name: "Smart Rack",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/smartrack",
            time: "Sep 2023"
        },
        {
            src: srweb,
            tag: ["Flask", "SQLAlchemy", "E-commerce", "Jquery", "Ajax", "Website"],
            name: "Smart Rack Website",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/",
            time: "Sep 2023"
        },
        {
            src: tpr,
            tag: ["Next Js", "Tailwind CSS", "Firebase", "Firestore", "Education", "Website"],
            name: "Tp Robotics",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/TP_Robotics",
            time: "Aug 2023"
        },

        {
            src: windy,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Windy-Winkybot",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/windy-winkybot",
            time: "Jun 2022"
        }
    ]

    const [choose, setChoose] = useState(1)

    const Choose1 = () => {

        return (
            <div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                    {projects?.map((project, id) => (

                        <div key={id}>
                            <div className='b p-10 flex flex-col gap-10 w-[28rem]'>
                                <img src={project.src} className='w-[28rem] aspect-video' alt="" />
                                <div className='flex flex-wrap gap-5'>
                                    {project.tag?.map((pt, id2) => (

                                        <div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                            {pt}
                                        </div>

                                    ))}
                                </div>
                                <div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </div>
                                <div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
        )

    }

    const Choose2 = () => {
        const projects2 = []
        for (var i of projects){
            for (var i2 of i.tag){
                if (i2 == "Website") projects2.push(i)
            }
        }
        return (
            <div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                    {projects2?.map((project, id) => (

                        <div key={id}>
                            <div className='b p-10 flex flex-col gap-10 w-[28rem]'>
                                <img src={project.src} className='w-[28rem] aspect-video' alt="" />
                                <div className='flex flex-wrap gap-5'>
                                    {project.tag?.map((pt, id2) => (

                                        <div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                            {pt}
                                        </div>

                                    ))}
                                </div>
                                <div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </div>
                                <div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
        )

    }

    const Choose3 = () => {
        const projects2 = []
        for (var i of projects){
            for (var i2 of i.tag){
                if (i2 == "Software") projects2.push(i)
            }
        }
        return (
            <div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                    {projects2?.map((project, id) => (

                        <div key={id}>
                            <div className='b p-10 flex flex-col gap-10 w-[28rem]'>
                                <img src={project.src} className='w-[28rem] aspect-video' alt="" />
                                <div className='flex flex-wrap gap-5'>
                                    {project.tag?.map((pt, id2) => (

                                        <div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                            {pt}
                                        </div>

                                    ))}
                                </div>
                                <div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </div>
                                <div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
        )

    }

    const Choose4 = () => {
        const projects2 = []
        for (var i of projects){
            for (var i2 of i.tag){
                if (i2 == "Machine Learning") projects2.push(i)
            }
        }
        return (
            <div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                    {projects2?.map((project, id) => (

                        <div key={id}>
                            <div className='b p-10 flex flex-col gap-10 w-[28rem]'>
                                <img src={project.src} className='w-[28rem] aspect-video' alt="" />
                                <div className='flex flex-wrap gap-5'>
                                    {project.tag?.map((pt, id2) => (

                                        <div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                            {pt}
                                        </div>

                                    ))}
                                </div>
                                <div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </div>
                                <div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
        )

    }

    const Choose = () => {
        if (choose == 1) 
        return (
            <div>
                <Choose1/>
            </div>
        )
        if (choose == 2) 
        return (
            <div>
                <Choose2/>
            </div>
        )
        if (choose == 3) 
        return (
            <div>
                <Choose3/>
            </div>
        )
        if (choose == 4) 
        return (
            <div>
                <Choose4/>
            </div>
        )
    }

    return (
        <div id='projects' className='h-fit '>
            <div className='mt-20 flex flex-col text-white  w-full h-fit'>
                <div className='flex w-full   items-center justify-center'>
                    <h1 className='pt-10 max-sm:pt-0 text-5xl w-full text-center'>
                        Projects
                    </h1>
                </div>
                <div className='justify-center items-center flex py-10 max-xl:py-10 text-xl p-5 text-center'>
                I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.

                </div>
                <div className='text-2xl max-xl:text-sm pb-16 max-xl:pb-5 flex items-center justify-center '>
                    <div 
                    onClick={() => {setChoose(1)}}
                    className={`border-[1px] border-slate-400 text-blue-300 ${choose==1 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer rounded-ss-full rounded-es-full`}>
                        <h1>All</h1>
                    </div>
                    <div
                    onClick={() => {setChoose(2)}} className={`border-[1px] border-slate-400 text-blue-300  ${choose==2 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer`}>
                        <h1>Website</h1>
                    </div>
                    <div onClick={() => {setChoose(3)}} className={`border-[1px] border-slate-400 text-blue-300  ${choose==3 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer`}>
                        <h1>Software</h1>
                    </div>
                    <div
                    onClick={() => {setChoose(4)}}
                    className={`border-[1px] border-slate-400 text-blue-300 ${choose==4 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer rounded-ee-full rounded-se-full`}>
                        <h1>Machine Learning</h1>
                    </div>

                </div>
                
                <Choose/>
                

            </div>
        </div>
    )
}

export default Project