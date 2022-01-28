import React from 'react'
import Mobile from '../../assets/mobile.png'
import Globe from '../../assets/globe.png'
import Writing from '../../assets/writing.png'
import Arrow from '../../assets/arrow.png'
import './works.scss'

export default function Works() {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const data = [
        {
          id: "1",
          icon: Mobile,
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: Globe,
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: Writing,
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

    const handleArrow = (way) => {
        if(way === 'left'){
            if(currentSlide !== 0){
                setCurrentSlide(currentSlide - 1)
            }else {
                setCurrentSlide(2)
            }
        }else {
            if(currentSlide === data.length - 1){
                setCurrentSlide(0)
            }else{
                setCurrentSlide(currentSlide + 1)
            }
        }
    } 


    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((item) => {
                    return <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="left-container">
                                <div className="img-container">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <span>Project</span>
                            </div>
                        </div>
                        <div className="right">
                                <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>
                })}
            </div>
            <img src={Arrow} alt="" className='arrow left' onClick={() => handleArrow('left')}/>
            <img src={Arrow} alt="" className='arrow right' onClick={() => handleArrow()}/>
        </div>
    )
}
