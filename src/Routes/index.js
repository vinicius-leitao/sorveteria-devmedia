import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Flavors from '../Pages/Flavors'
import About from '../Pages/About'

export default function RoutesTag(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/flavors' element={<Flavors/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}