import React from 'react'


function ContentCart(props) {
    console.log(props)
    return(
        <div class="bokTitle">
            <h3>{props.bokNamn}</h3>
            <p>{props.författare}</p>
            <p>{props.text}</p>
            <button className="btn">{props.cartAdd}</button>
        </div>
    )
    
}

export default ContentCart;