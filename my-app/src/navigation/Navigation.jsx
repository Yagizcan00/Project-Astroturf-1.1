import React from 'react'
import { Route, Routes } from "react-router-dom"
import LeftMenu from './leftMenu/LeftMenu'
import Home from "../pages/home/Home"
import Tactic from "../pages/tactic/Tactic"
import Managment from '../pages/managment/Managment'

const Navigaiton = () => {

    return (
        <div className='navigaiton'>
            <Routes>
                <Route path='/' element={<LeftMenu />}>
                    <Route index element={<Home />} />
                    <Route path='/Tactic' element={<Tactic />} />
                    <Route path='/Managment' element={<Managment />} />
                    <Route path='/toHome' element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Navigaiton
