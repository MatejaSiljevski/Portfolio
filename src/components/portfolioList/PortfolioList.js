import React from 'react'
import './portfolioList.scss'
function PortfolioList({title, id, selected,setSelected}) {
    
    const idHandler = () => {
        setSelected(id)
    }

    return (
        <div className={id === selected ? 'portfolioList listed active' : 'portfolioList listed'} onClick={idHandler}>
            {title}
        </div>
    )
}

export default PortfolioList
