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

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        {/* <Route path='/test' element={<Test />}></Route> */}

        <Route path="/check" element={<Check />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
