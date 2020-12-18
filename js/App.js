import React from 'react'
import Header from './Header'
import Product from './Product'


function App (){
        return(
        
        
        <div>
            <Header />

            <div className="produkt-wrapper">
                <Product 
                    bokNamn="A Sign of Four" 
                    författare="Av Sir Arthur Conan Doyle" 
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
                    cartAdd ="Add to cart" 
                />

                <Product 
                    bokNamn="A Study in Scarlet" 
                    författare="Av Sir Arthur Conan Doyle" 
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
                    cartAdd ="Add to cart" 
                /> 

                    <Product
                        bokNamn="Baskervilles Hound" 
                        författare="Av Sir Arthur Conan Doyle" 
                        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
                        cartAdd ="Add to cart" 
                    />

                <Product
                    bokNamn="The Adventures of Sherlock Holmes" 
                    författare="Av Sir Arthur Conan Doyle" 
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas saepe maxime perspiciatis, odio illo harum id voluptatum nobis quo laborum ratione aliquam dolorem sint ullam at nesciunt, dolorum beatae!" 
                    cartAdd ="Add to cart"
                />
            </div>
        </div>
            
        )
   
}


export default App;