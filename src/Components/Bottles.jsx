import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import { addtols,getLocalstorageData,removeformLs } from "./Utilities/utlities";


const Bottles = () => {

    const [bottles,Setbottles] = useState([]);
    const [cart,setCart] =useState([])
 
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data =>Setbottles(data))

    },[])

// load data form localStorage


useEffect(()=>{
    
   
    const savecart = getLocalstorageData();
   
    const mart =[]
    for(const id of savecart){
      const bottleofBottles =  bottles.find(bottle =>bottle.id ===id)
      if(bottleofBottles){
    
        mart.push(bottleofBottles)
      }
    }
    setCart(mart)
},[bottles])



    const purchaseHandler =(bottle)=>{
        const newCart = [...cart,bottle];
        setCart(newCart)
        addtols(bottle.id)
    }


    const removehandler =(id)=>{

       const remaining= cart.filter(bottle => bottle.id !==id)
       setCart(remaining)
        removeformLs(id)

    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-5">Bottles Available:{bottles.length}</h1>
        
            <h3>Bottle Cart:{cart.length}</h3>
            <div className="flex gap-3">
            {
                cart.map(cart=><Cart key={cart.id} cart={cart} removehandler={removehandler}></Cart>)
            }
            </div>
           <div className="grid grid-cols-3 gap-5 text-center mt-10">
           {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle} purchaseHandler={purchaseHandler}></Bottle>)

            }
           </div>
            
        </div>
    );
};

export default Bottles;