import React from 'react'
import imgUrl from '../img/sherlock-holmes-147255_640.png'
import Cart from './Cart'


function Header (){

    return(
        <div>
           <img src={imgUrl}></img>
            <Cart />
        </div> 
    )
       
   
}

export default Header ;