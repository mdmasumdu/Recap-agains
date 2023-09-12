
const getLocalstorageData =()=>{
    const getData=localStorage.getItem('cart');
    if(getData){
        return JSON.parse(getData)
    }
    return []
}


const savetoLs =(another)=>{
    const anotherStringfy = JSON.stringify(another)
    localStorage.setItem('cart',anotherStringfy)
    
}

const addtols =(id)=>{
    const gottenData = getLocalstorageData();
    gottenData.push(id)
    savetoLs(gottenData)
}


const removeformLs =(id)=>{
    const savedinLS = getLocalstorageData();
   const remaining= savedinLS.filter(idx=>idx !==id);
   savetoLs(remaining)
}


export {addtols,savetoLs,getLocalstorageData,removeformLs}