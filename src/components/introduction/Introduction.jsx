/*Module before File after */
import { useState, useEffect, React } from 'react'

import './Introduction.css'
import Myself from '../../assets/myself.jpeg'
const Introduction = () => {

    return (
        <div id='introduction'>
            <div className='flex xl:h-screen flex-row-reverse w-full items-center justify-center gap-20 max-md:flex-col pt-56 pb-40 px-32 max-md:px-10 max-md:pt-40 font-jm'>
            <img className='home-img rounded-full max-w-[26rem] max-md:max-w-[20rem] w-full ' src={Myself} alt="Myself" />
                <div className='w-fit flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white text-2xl'>
                            Hi, Comrades
                        </h1>
                        <h1 className='text-white text-3xl'>
                            This is Quang Vu a.k.a winky
                        </h1>
                        <h1 className='text-white text-2xl'>
                            And I'm a <span className='text-blue-400'>full-stack developer!</span>
                        </h1>
                    </div>

                    <h1 className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis vitae accusamus aliquid numquam mollitia delectus exercitationem, tempore itaque provident totam aliquam beatae ea fuga earum enim facilis esse assumenda.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis vitae accusamus aliquid numquam mollitia delectus exercitationem, tempore itaque provident totam aliquam beatae ea fuga earum enim facilis esse assumenda.
                    </h1>


                    <div className='flex gap-5'>
                        <a href="https://www.facebook.com/threalwinky/">

                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                                className='text-blue-400 border-2 rounded-full border-blue-400 p-1
                            cursor-pointer
                            hover:bg-blue-400
                            transition-[0.5s]
                            '
                            >
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                            </svg>

                        </a>
                        <a href="https://github.com/threalwinky">
                            <svg
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                                className='text-blue-400 border-2 rounded-full border-blue-400 p-1
                            cursor-pointer
                            hover:bg-blue-400
                            transition-[0.5s]'
                            >
                                <path d="M10.07 20.503a1 1 0 00-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 00-1.837-2.415 1.2 1.2 0 01-.167-.11 1 1 0 00-.93-.645h-.005a1 1 0 00-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 01.924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 002 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 00-.408-3.293 1.002 1.002 0 00-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 00-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 00-.631.584 6.3 6.3 0 00-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 00-1.256 3.83 8.422 8.422 0 00.043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 00-.118.4 1 1 0 001.942.479 1.678 1.678 0 01.468-.878 1 1 0 00-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 01-.033-.738 4.258 4.258 0 01.92-2.713 3.022 3.022 0 01.195-.231 1 1 0 00.188-1.025 3.388 3.388 0 01-.155-.555 4.094 4.094 0 01.079-1.616 7.543 7.543 0 012.415 1.18 1.009 1.009 0 00.827.133 11.777 11.777 0 016.173.001 1.005 1.005 0 00.83-.138 7.572 7.572 0 012.406-1.19 4.04 4.04 0 01.087 1.578 3.205 3.205 0 01-.169.607 1 1 0 00.188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0120 9.203a7.039 7.039 0 01-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 00-.546 1.746 1.63 1.63 0 01.466.908 3.06 3.06 0 01.093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 102 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 00-.155-1.311 4.256 4.256 0 00-.116-.416 6.513 6.513 0 005.445-6.424A8.697 8.697 0 0022 9.203a6.13 6.13 0 00-1.263-3.826z" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/threalwinky/">

                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                                className='text-blue-400 border-2 rounded-full border-blue-400 p-1
                            cursor-pointer
                            hover:bg-blue-400
                            transition-[0.5s]'
                            >
                                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                            </svg>

                        </a>
                        <a href="https://www.linkedin.com/in/threalwinky/">

                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                                className='text-blue-400 border-2 rounded-full border-blue-400 p-1
                            cursor-pointer
                            hover:bg-blue-400
                            transition-[0.5s]'
                            >
                                <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
                            </svg>

                        </a>

                    </div>
                    <div><a href="#about">
                    <button className='text-black p-2 bg-blue-400 rounded-xl px-10 mt-5'>Read more !</button>
                    </a>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Introduction