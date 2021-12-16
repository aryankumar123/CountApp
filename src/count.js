import React, { useState } from "react";
import './App.css'; 

const Count = ()=> {

const [num, setNum] = useState(0);
const incNum = () =>{
    setNum(num+1);
}
const decNum = () =>{
    if(num>0){
    setNum(num-1);
    }
    else{
        alert("zero reached");
    setNum(0);
    }
}
   return(
    <>
     <div className="maindiv">
        <div className="cendiv">
            <h1> {num} </h1>
            <div className="btndiv">
                <button onClick={incNum}> Inc </button>
                <button onClick={decNum}> Dec</button>
            </div>
        </div>
     </div>
    </>
   )
}

export default Count;