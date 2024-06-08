/*Module before File after */
import { useState, useEffect, React } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, Timestamp } from 'firebase/firestore'
import db from '../../firebase'
import './Contact.css'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    // const [email, setEmail] = useState(0)
    // const [email, setEmail] = useState(0)
    const handle = () => {
        console.log(123)
        if (email == ''|| name=='' ||message=='') {
            toast.error('Not enough information')
            return
        }
        addDoc(collection(db, "message"),{
            email,
            name,
            message
        })
        setEmail('')
        setName('')
        setMessage('')
        toast.success("Sent successfully")
    }

    return (
        <div id='contact' className='h-fit pb-0'>
            <div className='flex flex-col text-white  w-full '>
                <div className='flex w-full   items-center justify-center'>
                    <h1 className='pt-32 max-sm:pt-20 text-5xl w-full text-center'>
                        Contact
                    </h1>
                </div>
                <div className='justify-center items-center flex py-10 max-xl:py-10 text-xl p-5 text-center'>
                    Feel free to reach out to me for any questions or opportunities!
                </div>
                <div className='p-5 flex flex-col justify-center items-center w-full '>
                    <div className='flex flex-col w-[50rem] max-xl:w-96 gap-5 p-5 bg-slate-800 border-[1px] border-slate-400 rounded-xl'>
                        <input onChange={(evt) => {setEmail(evt.target.value)}} value={email} type="text" className='p-2 pl-5 bg-slate-300 text-slate-800 font-normal placeholder-slate-950 rounded-lg' placeholder='Your Email' />
                        <input onChange={(evt) => {setName(evt.target.value)}}  value={name} type="text" className='p-2 pl-5 bg-slate-300 text-slate-800 font-normal placeholder-slate-950 rounded-lg' placeholder='Your Name' />
                        {/* <input type="text" className='p-2 pl-5 bg-slate-300 text-slate-800 font-normal placeholder-slate-950 rounded-lg' placeholder='Your Email' /> */}
                        <textarea onChange={(evt) => {setMessage(evt.target.value)}} value={message} className='p-2 pl-5 h-32 bg-slate-300 text-slate-800 font-normal placeholder-slate-950 rounded-lg' placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                        <button onClick={() => {handle()}} className='p-2 py-4 bg-blue-400 hover:bg-blue-500 text-slate-800 text-xl font-normal placeholder-slate-950 rounded-lg'>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact