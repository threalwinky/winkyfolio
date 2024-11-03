/*Module before File after */
import { useState, useEffect, React } from 'react'

import './About.css'
import about from '../../assets/about.jpeg'
import uit from '../../assets/uit.png'
import { motion } from 'framer-motion'
const About = () => {

    return (
        <div className='flex flex-col text-white  w-full '>
            <div className='flex w-full   items-center justify-center'>
                <h1 className='pt-32 max-sm:pt-0 text-5xl w-full text-center'>
                    About me
                </h1>
            </div>
            <div id='about' className='flex  flex-row w-full items-center justify-center gap-20 max-md:flex-col pt-32 pb-40 px-32 max-md:px-10 max-md:pt-20 font-jm'>

                <motion.img

                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    transition={{ delay: 0, duration: 0.4 }}
                    viewport={{ once: true }}
                    src={about} alt="" className=' brightness-90 max-w-[26rem] max-md:max-w-[20rem] w-full rounded-2xl home-img2 ' />
                <div className='w-fit flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <motion.h1
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            viewport={{ once: true }}
                            className='text-white text-3xl'>
                            Ye, this is me
                        </motion.h1>
                        <motion.h1
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            viewport={{ once: true }}

                            className='text-white text-2xl'>
                            And I'm about to tell you about myself
                        </motion.h1>


                    </div>

                    <div className='text-gray-400 flex gap-2 flex-col ' >
                        <motion.h1
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 2.5, duration: 0.2 }}
                            viewport={{ once: true }}

                            className='text-white text-xl '>
                            Real name : <span className='text-blue-400'>Vo Quang Vu</span>
                        </motion.h1>
                        <motion.h1

                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 3, duration: 0.2 }}
                            viewport={{ once: true }}

                            className='text-white text-xl'>
                            Nickname : <span className='text-blue-400'>winky</span>
                        </motion.h1>
                        <motion.h1

                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 3.5, duration: 0.2 }}
                            viewport={{ once: true }}

                            className='text-white text-xl'>
                            DOB : <span className='text-blue-400'>November 9, 2006</span>
                        </motion.h1>

                        <motion.h1
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 4, duration: 0.2 }}
                            viewport={{ once: true }}

                            className='text-white text-xl'>
                            Horoscope : <span className='text-blue-400'>🦂</span>
                        </motion.h1>

                        <motion.h1
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 4.5, duration: 0.2 }}
                            viewport={{ once: true }}

                            className='text-white text-xl'>
                            High school : <span className='text-blue-400'>Tran Phu High School HCMC </span>
                        </motion.h1>
                        <motion.h1
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.4 } }}
                            transition={{ delay: 5, duration: 0.2 }}
                            viewport={{ once: true }}

                            className='text-white text-xl'>
                            University : <span className='text-blue-400 '> 
               
                              
                               VNU-HCM University of Information Technology 
                              
                                 </span>
                        </motion.h1>
                        <div className='items-center justify-center flex'>
                            <a href="https://ngl.link/threalwinky30461">
                                <motion.button
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                                    transition={{ delay: 7, duration: 0.1 }}
                                    viewport={{ once: true }}
                                    className='text-black p-2 bg-blue-400 
                                rounded-xl px-10 mt-5 hover:bg-blue-500'>
                                    Know more about me !</motion.button>
                            </a>

                        </div>
                    </div>




                </div>
            </div>
        </div>

    )
}

export default About