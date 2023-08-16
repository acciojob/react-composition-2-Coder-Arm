 
import React, { useState } from 'react';


 const Modal = ({show}) => {
   const [display, setDisplay] = useState("");
   // console.log(show)
    return ( <div>
     <button onClick={()=>setDisplay(true)}>Show Modal</button>
     {display && <div className="model-overlay" onClick={() => setDisplay(false)}>
      <button onClick={() => setDisplay(false)} className="model-close">Close</button>
      <p className="model-p">This is the content of the modal</p>
      </div>}
    </div>
    )
 }

 export default Modal