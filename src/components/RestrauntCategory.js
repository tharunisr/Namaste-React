import Itemlist from "./Itemlist";
import { useState } from "react";

const RestrauntCategory=({data,showItem,setshowIndex,dummy})=>{
    // const [showItem,setshowItem]=useState(false);
    // console.log(data);
    const handleClick=()=>{
    //   setshowItem(!showItem)
      setshowIndex();
    //   console.log(!showItem);
    }
    return( <div>
        {/* Header */}
       <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-xl p-4 ">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
       <span className="font-bold">{data.title} ({data.itemCards.length})</span>
       <span className="p-1">⮟</span>
       </div>
      
           
            {showItem && <Itemlist items={data.itemCards} dummy={dummy}/> } 
       </div>
          

        {/* Body */}
    </div>
)}

export default RestrauntCategory;