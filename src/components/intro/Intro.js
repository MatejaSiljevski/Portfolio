import React, {useEffect, useRef} from 'react'
import './Intro.scss'
import Man from '../../assets/man.png'
import Down from '../../assets/down.png'
import {init} from 'ityped'

function Intro() {
    const ityped = useRef()

    useEffect(() => {
        init(ityped.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:[" Developer", " Designer", " Content-Creator"],
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="image-container">
                    <img src={Man} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jane Doe</h1>
                    <h3>Freelance<span ref={ityped}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={Down} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
