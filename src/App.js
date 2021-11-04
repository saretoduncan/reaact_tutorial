import logo from './logo.svg';
import './App.css';
import CountButton from './components/counter/Countbutton';
import Search from './components/searchBar/search';
import { useEffect, useState } from 'react';

const App=()=> {
    const [productState, setProductState]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(productsArray=>{
                console.log(productsArray)
                const newProducts= productsArray.map((products)=>{
                    return products.title;
                }) 
                setProductState(newProducts);
            })
    },[])
    return ( <
        div className = "App" >
        <Search products={productState}/>
       
              <CountButton incrementBy={5} buttonBackgroundColor={"red"}/>
              
           
        </div>
    );
}

export default App;