/*Module before File after */
import { useState, useEffect, React } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, Timestamp } from 'firebase/firestore'

// import './Hobby.css'
import db from '../../firebase'
const Hobby = () => {

    const [counter, setCounter] = useState([])

    useEffect(() => {

        const unsub = onSnapshot(query(collection(db, "counter")), (doc) => {
            getDocs(collection(db, "counter")).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
    
                // console.log(newData)
                setCounter(newData.sort(function (a, b) {
                    return b.time - a.time;
                }))
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
                // })
    
            });
        });

        getDocs(collection(db, "counter")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            // console.log(newData)
            setCounter(newData.sort(function (a, b) {
                return b.time - a.time;
            }))
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
            // })

        });

    }, [])

    function changeDate(dateStr) {
        if (dateStr == 0) {
            return "Vua xong";
        }
        const l = localStorage.getItem("lang");
        const day = 0;
        const hour = 0;
        const minute = 0;
        var t = dateStr / (24 * 60 * 60);
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} days ago`
                : `Đã vào ${parseInt(t)} ngày trước`;
        t = dateStr / (60 * 60);
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} hours ago`
                : `Đã vào ${parseInt(t)} giờ trước`;
        t = dateStr / 60;
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} minutes ago`
                : `Đã vào ${parseInt(t)} phút trước`;
        t = dateStr;
        if (t > 1)
            return l == "en"
                ? `Posted ${parseInt(t)} seconds ago`
                : `Đã vào ${parseInt(t)} giây trước`;
    }

    const change = (id, val) => {
        updateDoc(doc(db, "counter", id), {
            check: 1 - val
        })
    }

    return (
        <div className='h-screen bg-slate-800 text-white font-jm flex flex-col items-center justify-center'>
            <div className=' mb-20 text-2xl'>
                Danh sách vào phòng
            </div>
            <div className='h-[40rem] overflow-y-scroll w-72 flex flex-col gap-2'>
                {counter?.map((c, id) => (

                    <div key={id} className='flex flex-row gap-3'>
                        {/* <p>{c.counter}</p>
    <p>{c.time}</p> */}
                        
                        
                        {c.counter}. {changeDate(Timestamp.now().seconds - c.time)}
                        <button className='bg-blue-700 p-1 px-3 rounded-xl' onClick={() => { change(c.id, c.check) }}>Check</button>
                        {c.check}
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Hobby