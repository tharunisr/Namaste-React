import Itemlist from "./Itemlist";
import { useState } from "react";

const RestrauntCategory=({data, isOpen, setIsOpen ,setshowIndex,dummy})=>{
    // const [showItem,setshowItem]=useState(false);
    // console.log(data);
    // const handleClick=()=>{
    //   setshowItem(!showItem)
      // setshowIndex();
    //   console.log(!showItem);
    // }
    return( <div>
        {/* Header */}
       <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-xl p-4 ">
       <div className="flex justify-between cursor-pointer">

       <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between "
      >
       <span className="font-bold">{data.title} ({data.itemCards.length})</span>
       <span className="p-1">⮟</span></button>
       </div>
      
           
            {isOpen && <Itemlist items={data.itemCards} dummy={dummy}/> } 
       </div>
          

        {/* Body */}
    </div>
)}

export default RestrauntCategory;