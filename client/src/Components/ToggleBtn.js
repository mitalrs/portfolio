import { useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import  useGlobalContext  from '../Context/useGlobalContext.js'


function ToggleBtn({light,setLight}){
    const[openPopUp,setOpenPopUp]=useState(false);
    // const[light,setLight]=useState(false);
    const { dispatch } = useGlobalContext();
 return(
    <div className="absolute top-2 right-2">
        <button onClick={()=>setOpenPopUp(true)} className='relative'>
            <div className='border rounded-md p-2'>
           {light? <FaRegMoon/> : <MdOutlineLightMode/>}
            </div>
            {openPopUp===true &&
             (
              <div className='bg-black-500 border rounded-md p-4 absolute -bottom-24 m-2 right-5'>
              <button onClick={()=>setLight(true)} className="ring-0">Light</button>
              <button onClick={()=>setLight(false)} className='ring-0'>Dark</button>
              </div>
             )
            }
        </button>
        <button onClick={() => dispatch({ type: "INCRIECE" })}>inc</button>
    </div>
 );
}
export default ToggleBtn;