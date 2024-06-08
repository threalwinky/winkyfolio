/*Module before File after */
import { useState, useEffect, React } from 'react'

import './Skill.css'
import { CopyBlock, nord } from 'react-code-blocks'

import react from '../../assets/skills/fe/react.svg'
import redux from '../../assets/skills/fe/redux.svg'
import bootstrap from '../../assets/skills/fe/bootstrap.svg'
import css from '../../assets/skills/fe/css.svg'
import flutter from '../../assets/skills/fe/flutter.svg'
import html from '../../assets/skills/fe/html.svg'
import jinja from '../../assets/skills/fe/jinja.svg'
import js from '../../assets/skills/fe/js.svg'
import next from '../../assets/skills/fe/next.svg'
import sass from '../../assets/skills/fe/sass.svg'
import tailwind from '../../assets/skills/fe/tailwind.svg'

import django from '../../assets/skills/be/django.svg'
import express from '../../assets/skills/be/express.svg'
import flask from '../../assets/skills/be/flask.svg'
import jquery from '../../assets/skills/be/jquery.svg'
import mongodb from '../../assets/skills/be/mongodb.svg'
import nodejs from '../../assets/skills/be/nodejs.svg'
import mysql from '../../assets/skills/be/mysql.svg'
import firebase from '../../assets/skills/be/firebase.svg'
import supabase from '../../assets/skills/be/supabase.jpg'
import pg from '../../assets/skills/be/firebase.svg'

import c from '../../assets/skills/pl/c.png'
import cpp from '../../assets/skills/pl/cpp.svg'
import python from '../../assets/skills/pl/python.svg'
import js2 from '../../assets/skills/pl/js.svg'
import kotlin from '../../assets/skills/pl/kotlin.svg'
import dart from '../../assets/skills/pl/dart.svg'
import php from '../../assets/skills/pl/php.svg'
import java from '../../assets/skills/pl/java.svg'
import cs from '../../assets/skills/pl/cs.svg'

import arduino from '../../assets/skills/other/arduino.svg'
import figma from '../../assets/skills/other/figma.svg'
import git from '../../assets/skills/other/git.svg'
import github from '../../assets/skills/other/github.svg'
import npp from '../../assets/skills/other/npp.svg'
import postman from '../../assets/skills/other/postman.svg'
import ps from '../../assets/skills/other/ps.svg'
import st from '../../assets/skills/other/st.svg'
import vim from '../../assets/skills/other/vim.svg'
import vsc from '../../assets/skills/other/vsc.svg'



const Skill = () => {

    const a = "#include<bits/stdc++.h\nusing namespace std;\nint main"
    const [b, setB] = useState("123")

    const [time, setTime] = useState(0)
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(0);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(5);
    const [index, setIndex] = useState(1);
    const toRotate = [`bool c[N];
void dfs(int u){
    tmp.push_back(u);
    c[u] = 1;
    for (auto x : adj[u]){
        if (!c[x]){
            dfs(x);
        }
    }
}`

    ];


    const period = 100000000000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const [done, setDone] = useState(0)

    useEffect(() => {
        setTimeout(() => { setDone(0) }, 0.5)
    }, [])

    const tick = () => {
        const l = toRotate
        let i = loopNum % l.length;
        let fullText = l[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(0.5);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className='text-white ' id='skills'>
            <div className='flex flex-col text-white  w-full h-full'>
                <div className='flex flex-col w-full   items-center justify-center h-fit'>
                    <div>
                        <h1 className='pt-32 max-sm:pt-0 text-5xl w-full text-center'>
                            Skills
                        </h1>
                    </div>


                </div>

                <div className='p-32 max-sm:p-5 '>
                    <div className='flex flex-col max-xl:flex-col gap-5 mb-10 justify-center items-center'>
                        <div className='flex gap-5 max-lg:flex-col'>
                            <div id='pl' className=' a w-[25rem] h-[25rem] bg-slate-700 p-3 py-10 rounded-xl'>
                                <div className='flex items-center justify-center text-2xl mb-8'>
                                    <h1>Programming Language</h1>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={c} alt="" className='h-5 w-5' />
                                            <p>C</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={cpp} alt="" className='h-5 w-5' />
                                            <p>C++</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={python} alt="" className='h-5 w-5' />
                                            <p>Python</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={dart} alt="" className='h-5 w-5' />
                                            <p>Dart</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={js2} alt="" className='h-5 w-5' />
                                            <p>JavaScript</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={cs} alt="" className='h-5 w-5' />
                                            <p>C#</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={php} alt="" className='h-5 w-5' />
                                            <p>PHP</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={java} alt="" className='h-5 w-5' />
                                            <p>Java</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>

                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={kotlin} alt="" className='h-5 w-5' />
                                            <p>Kotlin</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div id='frontend' className='a w-[25rem] h-full h-[25rem] bg-slate-700 p-3 py-10 rounded-xl'>
                                <div className='flex items-center justify-center text-2xl mb-8'>
                                    <h1>Frontend</h1>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={react} alt="" className='h-5 w-5' />
                                            <p>React Js</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={next} alt="" className='h-5 w-5 bg-white rounded-full' />
                                            <p>Next Js</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={html} alt="" className='h-5 w-5' />
                                            <p>HTML</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={css} alt="" className='h-5 w-5' />
                                            <p>CSS</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={js} alt="" className='h-5 w-5' />
                                            <p>JavaScript</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={flutter} alt="" className='h-5 w-5' />
                                            <p>Flutter</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={redux} alt="" className='h-5 w-5' />
                                            <p>Redux</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={tailwind} alt="" className='h-5 w-5' />
                                            <p>Tailwind CSS</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={bootstrap} alt="" className='h-5 w-5' />
                                            <p>Bootstrap</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={sass} alt="" className='h-5 w-5' />
                                            <p>SASS</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={jinja} alt="" className='h-5 w-5' />
                                            <p>Jinja</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 max-lg:flex-col'>
                            <div id='backend' className='a h-[25rem] w-[25rem]  bg-slate-700 p-3 py-10 rounded-xl'>
                                <div className='flex items-center justify-center text-2xl mb-8'>
                                    <h1>Backend</h1>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={nodejs} alt="" className='h-5 w-5' />
                                            <p>Node Js</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={firebase} alt="" className='h-5 w-5' />
                                            <p>Firebase</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={supabase} alt="" className='h-5 w-5' />
                                            <p>Supabase</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={django} alt="" className='h-5 w-5' />
                                            <p>Django</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={flask} alt="" className='h-5 w-5' />
                                            <p>Flask</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={mysql} alt="" className='h-5 w-5' />
                                            <p>MySQL</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={express} alt="" className='h-5 w-5' />
                                            <p>Express Js</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={jquery} alt="" className='h-5 w-5' />
                                            <p>Jquery</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={mongodb} alt="" className='h-5 w-5' />
                                            <p>Mongo DB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='other' className='a h-[25rem] w-[25rem]  bg-slate-700 p-3 py-10 rounded-xl'>
                                <div className='flex items-center justify-center text-2xl mb-8'>
                                    <h1>Other</h1>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={git} alt="" className='h-5 w-5' />
                                            <p>Git</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={github} alt="" className='h-5 w-5' />
                                            <p>Github</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={vsc} alt="" className='h-5 w-5' />
                                            <p>Visual Studio Code</p>
                                        </div>

                                    </div>

                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={figma} alt="" className='h-5 w-5' />
                                            <p>Figma</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={ps} alt="" className='h-5 w-5' />
                                            <p>Photoshop</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={vim} alt="" className='h-5 w-5' />
                                            <p>Vim</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={postman} alt="" className='h-5 w-5' />
                                            <p>Postman</p>
                                        </div>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={npp} alt="" className='h-5 w-5' />
                                            <p>Notepad++</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center gap-5'>
                                        <div className='bg-slate-700  p-2 px-4 rounded-xl border-[1px] border-slate-400 flex items-center justify-center gap-2'>
                                            <img src={st} alt="" className='h-5 w-5' />
                                            <p>Sublime Text</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-full p-20 max-xl:p-0 max-xl:my-2'>
                        <div className='bg-slate-700 p-20 max-xl:p-2 flex items-center justify-center'>
                        <figure className=''>
                            <img className='' src="https://wakatime.com/share/@winky/6f6975cd-24b3-4784-8cfa-d65d12d366d7.svg">
                            </img>
                        </figure>
                        </div>
                        
                    </div> */}

                    <figure><embed className='p-20 max-xl:p-0 max-h-[50rem] w-full ' src="https://wakatime.com/share/@winky/309afa32-4663-4826-a6ab-1b366564e8ca.svg"></embed></figure>
                    <div className='px-20'>
                    <CopyBlock
                        wrapLongLines
                        text={text}
                        language={"cpp"}
                        theme={nord}
                        showLineNumbers={true}
                        wrapLines
                        className="m-56 overflow-y-scroll"
                    />
                    </div>
                  

                </div>
            </div>
        </div>
    )
}

export default Skill