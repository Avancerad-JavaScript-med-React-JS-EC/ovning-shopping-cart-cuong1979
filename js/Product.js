import React from 'react'


function Product(props) {
    
    return(
        <div class="bokTitle">
            <h3 className="bokWrapper-h3">{props.bokNamn}</h3>
            <p className="bokWrapper-p1">{props.författare}</p>
            <p className="bokWrapper-p2">{props.text}</p>
            <button className="btn">{props.cartAdd}</button>
        </div>
    )
    
}

export default Product;