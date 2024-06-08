/*Module before File after */
import { useState, useEffect, React } from 'react'
import { motion } from 'framer-motion'
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
            description: "The recent major project I ever undertook was highly successful. It led me to win second place in the 6th Student Competition for Startup Ideas (6th sv_startup). Though I completed the project during my senior year of high school (grade 12) amidst numerous tests and deadlines, it is quite comprehensive.",
            link: "https://github.com/threalwinky/mathmystic",
            time: "Feb 2024"
        },

        {
            src: createen,

            name: "Createen",
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            description: "Built using Flask, this project propelled me to the Final Round of the SteamHacks 2023 competition. Despite being a beginner at the time, it surprised with its surprisingly rich feature set.",
            link: "https://github.com/threalwinky/createen",
            time: "May 2023"
        },
        {
            src: ew,
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            name: "Emilia World",
            description: "My first Flask project propelled me to the SteamHacks 2023 competition's First Round! While it had a fun, anime-inspired aesthetic (wink wink), it offered more than just that :D            ",
            link: "https://github.com/threalwinky/emiliaworld",
            time: "Feb 2023"
        },
        {
            src: ai,
            tag: ["Fifty One", "Jupyter Notebook", "Python", "Machine Learning", "AI"],
            name: "AI Challenge",
            description: "Many files when i was involved in AI challenge contest. Even though it was my first AI contest, I learned a lot and don't feel the project is perfect.",
            link: "https://github.com/threalwinky/AI_challenge",
            time: "Dec 2023",
        },
        {
            src: cgirl,
            tag: ["Python", "Tkinter", "Python", "Software"],
            name: "CGirl 2.0",
            description: "My complete software that i use tkinter to build it. The idea comes to my mind when my friend asked me about the National High School Entrance Exam date",
            link: "https://github.com/threalwinky/CGirl",
            time: "Jun 2022"
        },

        {
            src: wiboy,
            tag: ["React Js", "Ionic", "Tailwind CSS", "Software", "Website"],
            name: "Wiboy",
            description: `This is my first Ionic app, and I'm still learning the ropes! While it's currently a demo for a "Wibu World" for boys, I'm excited to keep building on it.  ^_^`,
            link: "https://github.com/threalwinky/wiboy",
            time: "Mar 2024"
        },
        {
            src: dotfile,
            tag: ["Vim Script", "System", "Vim", "C++", "Code Editor"],
            name: "Dotfiles",
            description: "This configuration includes my NeoVim settings, along with themes for PowerShell and the terminal. I started building it when I discovered Vim's impressive speed and low resource footprint, which motivated me to delve deeper into customization.",
            link: "https://github.com/threalwinky/dotfiles",
            time: "Dec 2021"
        },


        {
            src: sr,
            tag: ["Flutter", "System", "Arduino", "Firebase", "Software", "Phone app"],
            name: "Smart Rack",
            description: "This is a mobile application using Flutter to control a drying rack built with Arduino technology. This innovative project that automates rain protection for drying clothes won second place in a school-level scientific research competition.",
            link: "https://github.com/threalwinky/smartrack",
            time: "Sep 2023"
        },
        {
            src: srweb,
            tag: ["Flask", "SQLAlchemy", "E-commerce", "Jquery", "Ajax", "Website"],
            name: "Smart Rack Website",
            description: "This is also part of the drying rack project. it is a sales page for the drying racks I mentioned earlier",
            link: "https://github.com/threalwinky/",
            time: "Sep 2023"
        },
        {
            src: tpr,
            tag: ["Next Js", "Tailwind CSS", "Firebase", "Firestore", "Education", "Website"],
            name: "Tp Robotics",
            description: "This is the website of my club Tran Phu Robotics",
            link: "https://github.com/threalwinky/TP_Robotics",
            time: "Aug 2023"
        },

        {
            src: windy,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Windy-Winkybot",
            description: "This is a demo discord bot I made using discord js v16. It has a lot of features like listening to music, watching movies, etc. Even though I gave it up a few years ago, it still works fine.",
            link: "https://github.com/threalwinky/windy-winkybot",
            time: "Jun 2022"
        }
    ]

    const [choose, setChoose] = useState(1)

    const Choose1 = () => {

        return (
            <motion.div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                {projects?.map((project, id) => (

                    <motion.div initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        transition={{ delay: 0, duration: 0.4 }} key={id}>
                        <motion.div className='h-[62rem]  b p-10 flex flex-col gap-10  w-[28rem] max-xl:w-[23rem] '>
                            <img src={project.src} className= 'w-[28rem] max-xl:w-[23rem]  aspect-video' alt="" />
                            <motion.div className='flex flex-wrap gap-5'>
                                {project.tag?.map((pt, id2) => (

                                    <motion.div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                        {pt}
                                    </motion.div>

                                ))}
                            </motion.div>
                            <div className='flex flex-col h-full  justify-between'>
                                <motion.div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </motion.div>
                                <motion.div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </motion.div>
                            </div>

                        </motion.div>
                    </motion.div>

                ))}
            </motion.div>
        )

    }

    const Choose2 = () => {
        const projects2 = []
        for (var i of projects) {
            for (var i2 of i.tag) {
                if (i2 == "Website") projects2.push(i)
            }
        }
        return (
            <motion.div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                {projects2?.map((project, id) => (

                    <motion.div initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        transition={{ delay: 0, duration: 0.4 }} key={id}>
                        <motion.div className='h-[62rem]  b p-10 flex flex-col gap-10  w-[28rem] max-xl:w-[23rem] '>
                            <img src={project.src} className= 'w-[28rem] max-xl:w-[23rem]  aspect-video' alt="" />
                            <motion.div className='flex flex-wrap gap-5'>
                                {project.tag?.map((pt, id2) => (

                                    <motion.div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                        {pt}
                                    </motion.div>

                                ))}
                            </motion.div>
                            <div className='flex flex-col h-full  justify-between'>
                                <motion.div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </motion.div>
                                <motion.div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </motion.div>
                            </div>

                        </motion.div>
                    </motion.div>

                ))}
            </motion.div>
        )

    }

    const Choose3 = () => {
        const projects2 = []
        for (var i of projects) {
            for (var i2 of i.tag) {
                if (i2 == "Software") projects2.push(i)
            }
        }
        return (
            <motion.div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                {projects2?.map((project, id) => (

                    <motion.div initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        transition={{ delay: 0, duration: 0.4 }} key={id}>
                        <motion.div className='h-[62rem]  b p-10 flex flex-col gap-10  w-[28rem] max-xl:w-[23rem] '>
                            <img src={project.src} className= 'w-[28rem] max-xl:w-[23rem]  aspect-video' alt="" />
                            <motion.div className='flex flex-wrap gap-5'>
                                {project.tag?.map((pt, id2) => (

                                    <motion.div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                        {pt}
                                    </motion.div>

                                ))}
                            </motion.div>
                            <div className='flex flex-col h-full  justify-between'>
                                <motion.div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </motion.div>
                                <motion.div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </motion.div>
                            </div>

                        </motion.div>
                    </motion.div>

                ))}
            </motion.div>
        )

    }

    const Choose4 = () => {
        const projects2 = []
        for (var i of projects) {
            for (var i2 of i.tag) {
                if (i2 == "Machine Learning") projects2.push(i)
            }
        }
        return (
            <motion.div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                {projects2?.map((project, id) => (

                    <motion.div initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        transition={{ delay: 0, duration: 0.4 }} key={id}>
                        <motion.div className='h-[62rem]  b p-10 flex flex-col gap-10  w-[28rem] max-xl:w-[23rem] '>
                            <img src={project.src} className= 'w-[28rem] max-xl:w-[23rem]  aspect-video' alt="" />
                            <motion.div className='flex flex-wrap gap-5'>
                                {project.tag?.map((pt, id2) => (

                                    <motion.div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                                        {pt}
                                    </motion.div>

                                ))}
                            </motion.div>
                            <div className='flex flex-col h-full  justify-between'>
                                <motion.div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    <h2 className='text-lg text-slate-400'>{project.time}</h2>
                                    <p className='text-xl text-slate-300'>{project.description}</p>
                                </motion.div>
                                <motion.div>
                                    <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                                        <button className='' >Try It</button>
                                    </a>

                                </motion.div>
                            </div>

                        </motion.div>
                    </motion.div>

                ))}
            </motion.div>
        )

    }

    const Choose = () => {
        if (choose == 1)
            return (
                <motion.div>
                    <Choose1 />
                </motion.div>
            )
        if (choose == 2)
            return (
                <motion.div>
                    <Choose2 />
                </motion.div>
            )
        if (choose == 3)
            return (
                <motion.div>
                    <Choose3 />
                </motion.div>
            )
        if (choose == 4)
            return (
                <motion.div>
                    <Choose4 />
                </motion.div>
            )
    }

    return (
        <motion.div id='projects' className='h-fit '>
            <motion.div className='mt-20 flex flex-col text-white  w-full h-fit'>
                <motion.div className='flex w-full   items-center justify-center'>
                    <h1 className='pt-10 max-sm:pt-0 text-5xl w-full text-center'>
                        Projects
                    </h1>
                </motion.div>


                <motion.div className='justify-center items-center flex py-10 max-xl:py-10 text-xl p-5 text-center'>
                    <p className='text-xl px-24 max-xl:p-4  text-center max-w-[60rem]'>I've had the opportunity to work on a variety of projects, including both web applications and mobile apps for Android.  A few of my most notable projects are</p>

                </motion.div>
                <motion.div className='text-2xl max-xl:text-sm pb-16 max-xl:pb-5 flex items-center justify-center '>
                    <motion.div
                        onClick={() => { setChoose(1) }}
                        className={`border-[1px] border-slate-400 text-blue-300 ${choose == 1 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer rounded-ss-full rounded-es-full`}>
                        <h1>All</h1>
                    </motion.div>
                    <motion.div
                        onClick={() => { setChoose(2) }} className={`border-[1px] border-slate-400 text-blue-300  ${choose == 2 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer`}>
                        <h1>Website</h1>
                    </motion.div>
                    <motion.div onClick={() => { setChoose(3) }} className={`border-[1px] border-slate-400 text-blue-300  ${choose == 3 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer`}>
                        <h1>Software</h1>
                    </motion.div>
                    <motion.div
                        onClick={() => { setChoose(4) }}
                        className={`border-[1px] border-slate-400 text-blue-300 ${choose == 4 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer rounded-ee-full rounded-se-full`}>
                        <h1>ML</h1>
                    </motion.div>

                </motion.div>

                <Choose />


            </motion.div>
        </motion.div>
    )
}

export default Project