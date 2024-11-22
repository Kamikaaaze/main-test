import { useState } from 'react';
import './Test.css'
function Test(){

function getAdvice(){
    return "hi";
}

const[advice,setAdvice]= useState("");

    const content = ()=> {
        const advice= getAdvice();
        return advice;
    }

return(
    <div className='parent'>
          <div className="card">
        <p className="content">{advice}</p>
        <input type="submit" onClick={content()}/>
            </div>
    </div>
  

)
}
export default Test;