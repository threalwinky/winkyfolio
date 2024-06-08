/*Module before File after */
import { useState, useEffect, React } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, Timestamp } from 'firebase/firestore'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { CopyBlock } from 'react-code-blocks';

import './Hobby.css'
import db from '../../firebase'
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

    return (
        <div className='text-white h-screen'>
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
                <div className='p-10'>

                </div>

            </div>


        </div>
    )
}

export default Hobby