/*Module before File after */
import { useState, useEffect, React } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, Timestamp } from 'firebase/firestore'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { CopyBlock } from 'react-code-blocks';
import ReactPlayer from 'react-player'
import './Hobby.css'
import db from '../../firebase'

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

import st1 from '../../assets/hobby/sketch/st1.jpeg'
import st2 from '../../assets/hobby/sketch/st2.jpeg'
import st3 from '../../assets/hobby/sketch/st3.jpeg'
import st4 from '../../assets/hobby/sketch/st4.jpeg'
import st5 from '../../assets/hobby/sketch/st5.jpeg'

import aod from '../../assets/hobby/anime/aod.jpg'
import bluelock from '../../assets/hobby/anime/bluelock.jpg'
import cg from '../../assets/hobby/anime/cg.jpg'
import deathnote from '../../assets/hobby/anime/deathnote.jpg'
import jjk from '../../assets/hobby/anime/jjk.jpg'
import kny from '../../assets/hobby/anime/kny.jpg'
import naruto from '../../assets/hobby/anime/naruto.jpg'
import onepiece from '../../assets/hobby/anime/onepiece.jpeg'
import wind from '../../assets/hobby/anime/wind.jpg'
import yugi from '../../assets/hobby/anime/yugi.jpg'
import higehiro from '../../assets/hobby/anime/higehiro.jpg'
import tg from '../../assets/hobby/anime/tg.jpeg'
import ac from '../../assets/hobby/anime/ac.webp'
import cote from '../../assets/hobby/anime/cote.jpeg'

// import guitar from '../../assets/hobby/guitar.mp4'

import artist from '../../assets/hobby/music/artist.png'
import track from '../../assets/hobby/music/track.png'
const Hobby = () => {

    const [counter, setCounter] = useState([])

    useEffect(() => {
        getDocs(collection(db, "counter")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            // console.log(newData)
            setCounter(newData)
            var m = 0, cm = 0
            for (var i of newData) {
                if (i.time > cm) {
                    cm = i.time
                    m = i.counter
                }
            }
            // addDoc(collection(db, "counter"), {
            //     counter: m + 1,
            //     time: Timestamp.now().seconds,
            //     check: 0,
            // })

        });

    }, [])

    const projects = [
        {
            src: mathmystic,
            tag: ["React Js", "Tailwind CSS", "Firebase", "Firestore", "E-commerce", "Website"],
            name: "Mathmystic",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Feb 2024"
        },

        {
            src: createen,

            name: "Createen",
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "May 2023"
        },
        {
            src: ew,
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            name: "Emilia World",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Feb 2023"
        },
        {
            src: ai,
            tag: ["Fifty One", "Jupyter Notebook", "Python", "Machine Learning", "AI"],
            name: "AI Challenge",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Dec 2023",
        },
        {
            src: cgirl,
            tag: ["Python", "Tkinter", "Python", "Software"],
            name: "CGirl 2.0",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        },

        {
            src: wiboy,
            tag: ["React Js", "Ionic", "Tailwind CSS", "Software", "Website"],
            name: "Wiboy",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Mar 2024"
        },
        {
            src: dotfile,
            tag: ["Vim Script", "System", "Vim", "C++", "Code Editor"],
            name: "Dotfiles",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Dec 2021"
        },


        {
            src: sr,
            tag: ["Flutter", "System", "Arduino", "Firebase", "Software", "Phone app"],
            name: "Smart Rack",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Sep 2023"
        },
        {
            src: srweb,
            tag: ["Flask", "SQLAlchemy", "E-commerce", "Jquery", "Ajax", "Website"],
            name: "Smart Rack Website",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Sep 2023"
        },
        {
            src: tpr,
            tag: ["Next Js", "Tailwind CSS", "Firebase", "Firestore", "Education", "Website"],
            name: "Tp Robotics",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Aug 2023"
        },

        {
            src: windy,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Windy-Winkybot",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        }
    ]

    const animes = [
        {
            src: aod,
            tag: ["React Js", "Tailwind CSS", "Firebase", "Firestore", "E-commerce", "Website"],
            name: "Angel Of Death",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Feb 2024"
        },

        {
            src: bluelock,

            name: "Blue Lock",
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "May 2023"
        },
        {
            src: cg,
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            name: "Code Geass",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Feb 2023"
        },
        {
            src: deathnote,
            tag: ["Fifty One", "Jupyter Notebook", "Python", "Machine Learning", "AI"],
            name: "Death Note",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Dec 2023",
        },
        {
            src: jjk,
            tag: ["Python", "Tkinter", "Python", "Software"],
            name: "Jujutsu no Kaisen",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        },

        {
            src: wind,
            tag: ["Flask", "SQLAlchemy", "E-commerce", "Jquery", "Ajax", "Website"],
            name: "Wind Breaker",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Sep 2023"
        },

    ]

    const animesmore = [
        {
            src: aod,
            tag: ["React Js", "Tailwind CSS", "Firebase", "Firestore", "E-commerce", "Website"],
            name: "Angel Of Death",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Feb 2024"
        },

        {
            src: bluelock,

            name: "Blue Lock",
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "May 2023"
        },
        {
            src: cg,
            tag: ["Flask", "SQLAlchemy", "NLTK", "Machine Learning", "AI", "Website"],
            name: "Code Geass",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Feb 2023"
        },
        {
            src: deathnote,
            tag: ["Fifty One", "Jupyter Notebook", "Python", "Machine Learning", "AI"],
            name: "Death Note",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Dec 2023",
        },
        {
            src: jjk,
            tag: ["Python", "Tkinter", "Python", "Software"],
            name: "Jujutsu no Kaisen",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        },
        {
            src: wind,
            tag: ["Flask", "SQLAlchemy", "E-commerce", "Jquery", "Ajax", "Website"],
            name: "Wind Breaker",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Sep 2023"
        },
        {
            src: kny,
            tag: ["React Js", "Ionic", "Tailwind CSS", "Software", "Website"],
            name: "Kimetsu no Yaiba",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Mar 2024"
        },
        {
            src: naruto,
            tag: ["Vim Script", "System", "Vim", "C++", "Code Editor"],
            name: "Naruto",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Dec 2021"
        },


        {
            src: onepiece,
            tag: ["Flutter", "System", "Arduino", "Firebase", "Software", "Phone app"],
            name: "One Piece",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Sep 2023"
        },

        {
            src: yugi,
            tag: ["Next Js", "Tailwind CSS", "Firebase", "Firestore", "Education", "Website"],
            name: "Yugioh",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Aug 2023"
        },

        {
            src: ac,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Assassination Classroom",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        },
        {
            src: tg,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Tokyo Ghoul",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        },
        {
            src: higehiro,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Higehiro",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        },
        {
            src: cote,
            tag: ["JavaScript", "Discord", "Bot", "Entertainment", "Software"],
            name: "Classroom of the Elite",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas reprehenderit praesentium quae, ea obcaecati placeat qui officia a fugiat doloribus animi laboriosam corporis illum reiciendis saepe unde, labore magni? ",
            link: "https://github.com/threalwinky/winkyfolio",
            time: "Jun 2022"
        }
    ]

    const [choose, setChoose] = useState(1)

    const Choose1 = () => {
        const [more, setMore] = useState(0)
        return (
            <div className=' flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                <p className='text-xl px-10 text-center max-w-[40rem]'>Oh it must to say anime is my main part of life. Cuz it makes me feeling pleasant after watching  ≧°◡°≦</p>

                <div className='flex flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                    {(more == 0 ? animes : animesmore)?.map((project, id) => (

                        <div key={id}>
                            <div className='b p-10 flex flex-col gap-10 w-[28rem]'>
                                <img src={project.src} className='w-[28rem] aspect-[9/12]' alt="" />
                                {/* <div className='flex flex-wrap gap-5'>
            {project.tag?.map((pt, id2) => (

                <div key={id2} className='text-blue-300 bg-slate-800 p-2 rounded-xl border-[1px] border-slate-400'>
                    {pt}
                </div>

            ))}
        </div> */}
                                <div>
                                    <h1 className='text-3xl'>{project.name}</h1>
                                    {/* <h2 className='text-lg text-slate-400'>{project.time}</h2> */}
                                    {/* <p className='text-xl text-slate-300'>{project.description}</p> */}
                                </div>
                                {/* <div>
            <a className='bg-blue-400 text-slate-900 rounded-xl p-2 px-5 hover:bg-blue-500' href={project.link}>
                <button className='' >Try It</button>
            </a>

        </div> */}
                            </div>
                        </div>

                    ))}
                </div>
                <div>
                    <button className='text-2xl bg-blue-400 hover:bg-blue-500 p-2 px-10 rounded-xl text-slate-800'
                        onClick={() => { setMore(!more) }}
                    >{more == 0 ? "Show more" : "Show less"}</button>
                </div>

            </div>
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
            <div className=' flex flex-col w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                <p className='text-xl px-10 text-center max-w-[40rem]'>
                    I listen to many kinds of music but major in EDM and Pop ^ᵔᴥᵔ^
                    </p>
                <div className='flex max-xl:flex-col max-w-[100rem] gap-5'>
                <img src={artist} className='max-w-[25rem]' alt="" />
                <img src={track} className='max-w-[25rem]' alt="" />
                </div>
               
                <img src="https://spotify-recently-played-readme.vercel.app/api?user=317kafuqbev46sq43z2u3zjjbpym&unique=true" alt="" />
            </div>
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
            <div className=' flex flex-col max-xl:flex-row flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                <p className='text-xl px-24  text-center'>Oh what are you seeing? A chick 🐧</p>
                <ReactPlayer url={'videos/guitar.mp4'} controls='true' playing />

            </div>
        )

    }

    const Choose4 = () => {
        const projects2 = []
        for (var i of projects) {
            for (var i2 of i.tag) {
                if (i2 == "Machine Learning") projects2.push(i)
            }
        }
        const sketchs = [st1, st2, st3, st4, st5]
        return (
            <div className=' flex flex-col flex-wrap w-full p-20 max-xl:p-2 pt-0  gap-10 justify-center items-center'>
                <p className='text-xl px-10 text-center'>Just let you to know I have been doing some drawing myself .^.</p>
                <div className='flex flex-wrap max-w-[60rem] gap-10  justify-center items-center'>
                    {sketchs?.map((sketch, id) => (

                        <div key={id}>
                            <div><img className='home-img2 rounded-xl max-w-[20rem]' src={sketch} alt="" /></div>
                        </div>

                    ))}
                </div>

            </div>
        )

    }

    const Choose = () => {
        if (choose == 1)
            return (
                <div>
                    <Choose1 />
                </div>
            )
        if (choose == 2)
            return (
                <div>
                    <Choose2 />
                </div>
            )
        if (choose == 3)
            return (
                <div>
                    <Choose3 />
                </div>
            )
        if (choose == 4)
            return (
                <div>
                    <Choose4 />
                </div>
            )
    }

    return (
        <div id='hobbies' className='text-white h-fit'>
            {/* {counter?.map((c, id) => (

                <div key={id} className='flex flex-row gap-3'>
                    <p>{c.counter}</p>
                    <p>{c.time}</p>
                </div>

            ))} */}


            <div className='flex flex-col text-white  w-full h-fit'>
                <div className='flex w-full   items-center justify-center'>
                    <h1 className='pt-10 max-sm:pt-0 text-5xl w-full text-center'>
                        Hobbies
                    </h1>
                </div>
                <div className='justify-center items-center flex py-10 max-xl:py-10 text-xl p-5 text-center'>
                    {/* I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects. */}

                </div>
                <div className='text-2xl max-xl:text-sm pb-16 max-xl:pb-5 flex items-center justify-center '>
                    <div
                        onClick={() => { setChoose(1) }}
                        className={`border-[1px] border-slate-400 text-blue-300 ${choose == 1 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer rounded-ss-full rounded-es-full`}>
                        <h1>Anime/Manga</h1>
                    </div>
                    <div
                        onClick={() => { setChoose(2) }} className={`border-[1px] border-slate-400 text-blue-300  ${choose == 2 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer`}>
                        <h1>Music</h1>
                    </div>
                    <div onClick={() => { setChoose(3) }} className={`border-[1px] border-slate-400 text-blue-300  ${choose == 3 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer`}>
                        <h1>Guitar/Sing</h1>
                    </div>
                    <div
                        onClick={() => { setChoose(4) }}
                        className={`border-[1px] border-slate-400 text-blue-300 ${choose == 4 ? " bg-slate-900 " : "  "} p-2 px-10 max-xl:px-3 cursor-pointer rounded-ee-full rounded-se-full`}>
                        <h1>Sketch</h1>
                    </div>

                </div>

                <Choose />


            </div>
        </div>
    )
}

export default Hobby