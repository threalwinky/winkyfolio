import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './components/introduction/Introduction'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Award from './components/award/Award'
import Hobby from './components/hobby/Hobby'
import Home from './routes/home/Home';
import Check from './routes/check/Check';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0)
  const contextClass = {
    success: "bg-green-200",
    error: "bg-red-200",
    info: "bg-blue-200",
    warning: "bg-orange-100",
    default: "bg-sky-100",
    dark: "bg-indigo-100 font-gray-300",
  };
  return (

    <BrowserRouter>
    
      <Routes >
        <Route path="/" element={<Home />} />
        {/* <Route path='/test' element={<Test />}></Route> */}

        <Route path="/check" element={<Check />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        draggableDirection='y'
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex p-5 my-3 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "flex text-black font-rbt font-normal text-lg"}
      // stacked={true}
      />
    </BrowserRouter>


  )
}

export default App
