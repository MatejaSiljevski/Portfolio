import React from 'react'
import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'

function Topbar({menuOpen, setMenuOpen}) {

    const menuHandler = () => {
        setMenuOpen(!menuOpen)
    }
    

    return (
        <div className={menuOpen ? 'topbar active' : "topbar"} id='topbar' >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>genius.</a>
                    <div className="item-container person">
                        <Person />
                        <span>+381 656956810</span>
                    </div>
                    <div className="item-container">
                        <Mail className="icon"/>
                        <span>mateja.siljevski@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={menuHandler}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
