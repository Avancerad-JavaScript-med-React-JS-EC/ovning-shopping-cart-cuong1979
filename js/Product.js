import React from 'react'
import ContentCart from './ContentCart';


function Product (){
    return(
       
        <div className="bok">
             <ContentCart 
             bokNamn="A Sign of Four" 
             författare="Av Sir Arthur Conan Doyle" 
             text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
             cartAdd ="Add to cart" 
             />
             
             <ContentCart 
             bokNamn="A Study in Scarlet" 
             författare="Av Sir Arthur Conan Doyle" 
             text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
             cartAdd ="Add to cart" 
             /> 
             
             <ContentCart 
             bokNamn="Baskervilles Hound" 
             författare="Av Sir Arthur Conan Doyle" 
             text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
             cartAdd ="Add to cart" 
             />
             
             <ContentCart 
             bokNamn="The Adventures of Sherlock Holmes" 
             författare="Av Sir Arthur Conan Doyle" 
             text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
             cartAdd ="Add to cart"
             />
        </div>
    )
        
   
}


export default Product;