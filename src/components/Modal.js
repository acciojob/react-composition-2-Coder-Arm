 
import React, { useState } from 'react';


 const Modal = ({show}) => {
   const [display, setDisplay] = useState("");
   // console.log(show)
    return ( <div>
      <div>
     <button onClick={()=>setDisplay(true)}>Show Modal</button>
     </div>
     {display && <div className="model-overlay">
      <button onClick={() => setDisplay(false)} className="model-close">Close</button>
      <p className="model-p">This is the content of the modal</p>
      </div>}
    </div>
    )
 }

 export default Modal