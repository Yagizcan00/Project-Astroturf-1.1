import React from 'react'
import { Link, Outlet } from "react-router-dom"
import "./LeftMenu.scss"
import Logo from "../../Image/7ye-7-logo kopyası/png/logo-no-background.png"
import { AiFillHome } from "react-icons/ai";
import { TbSoccerField } from "react-icons/tb";
import { MdCreateNewFolder } from "react-icons/md";


const LeftMenu = () => {

    return (
        <div className='allpage'>
            <nav className='leftmenu'>

                <div>
                    <img className="logo" src={Logo} alt="Logo" />
                </div>

                <section className='menu'>
                    <div className='item'>
                        <AiFillHome className="icon" />
                        <Link to="/toHome">
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className='item'>
                        <TbSoccerField className="icon" />
                        <Link to="/Tactic">
                            <p>Tactic</p>
                        </Link>
                    </div>
                    <div className='item'>
                        <MdCreateNewFolder className="icon" />
                        <Link to="/Managment">
                            <p>Managment</p>
                        </Link>
                    </div>
                </section>
            </nav>

            <Outlet />
        </div>
    )
}

export default LeftMenu
