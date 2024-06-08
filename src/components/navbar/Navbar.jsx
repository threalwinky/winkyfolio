/*Module before File after */
import { useState, useEffect, React } from 'react'
import Popup from 'reactjs-popup';
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(0)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(1);
            } else {
                setScrolled(0);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    return (
        <div className={`z-10 fixed w-screen p-10 px-32 ${scrolled ? "p-5 bg-slate-800" : "p-10"} transition-[1s_ease-in-out] max-sm:px-10 `}>
            <div className='flex justify-between text-white w-full '>
                <div>
                    <a href="#introduction"><h1 className='text-white text-2xl font-semibold'>
                        Winky.
                    </h1></a>


                </div>
                <div className='text-white flex gap-10'>
                    <div>
                        <a href='#introduction' className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            Introduction
                        </a>
                    </div>
                    <div>
                        <a href='#about' className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            About me
                        </a>
                    </div>
                    <div>
                        <a className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            Hobbies
                        </a>
                    </div>
                    <div>
                        <a href='#awards' className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            Awards
                        </a>
                    </div>
                    <div>
                        <a href='#skills' className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            Skills
                        </a>
                    </div>
                    <div>
                        <a href='#projects' className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            Projects
                        </a>
                    </div>
                    <div>
                        <a className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                            Contact
                        </a>
                    </div>

                </div>
                <Popup
                    trigger={<div className="menu-item xl:hidden text-lg cursor-pointer">     <svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"

                    >
                        <path
                            fillRule="evenodd"
                            d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                        />
                    </svg> </div>}
                    position="left top"
                    on="click"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={false}
                >
                    <div className="menu text-white bg-slate-800 p-5 rounded-xl gap-2 flex flex-col font-jm">
                        <div >
                            <a href='#introduction' className='text-lg cursor-pointer hover:text-blue-400 '>
                                Introduction
                            </a>
                        </div>
                        <div >
                            <a href='#about' className='text-lg cursor-pointer hover:text-blue-400 w-full'>
                                About me
                            </a>
                        </div>
                        <div>
                            <a className='text-lg cursor-pointer hover:text-blue-400 '>
                                Hobbies
                            </a>
                        </div>
                        <div>
                            <a href='#awards' className='text-lg cursor-pointer hover:text-blue-400 '>
                                Awards
                            </a>
                        </div>
                        <div>
                            <a href='#skills' className='text-lg cursor-pointer hover:text-blue-400 '>
                                Skills
                            </a>
                        </div>

                        <div>
                            <a href='#projects' className='text-lg cursor-pointer hover:text-blue-400 max-xl:hidden'>
                                Projects
                            </a>
                        </div>
                        <div>
                            <a className='text-lg cursor-pointer hover:text-blue-400 '>
                                Contact
                            </a>
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
    )
}

export default Navbar