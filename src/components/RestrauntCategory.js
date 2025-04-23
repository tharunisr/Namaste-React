import Itemlist from "./Itemlist";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const RestrauntCategory=({data, isOpen, setIsOpen ,setshowIndex,dummy})=>{
    // const [showItem,setshowItem]=useState(false);
    // console.log(data);
    // const handleClick=()=>{
    //   setshowItem(!showItem)
      // setshowIndex();
    //   console.log(!showItem);
    // }
    return( <div className="px-2 sm:px-4">
      {/* Header */}
      <div className="w-full sm:w-8/12 mx-auto my-5 bg-gray-50 shadow-xl rounded-xl p-4">
        <div className="flex justify-between items-center cursor-pointer">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="font-bold text-base sm:text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span className="text-xl transform transition-transform duration-200 ease-in-out">
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
        </div>
    
        {/* Collapsible Body */}
        {isOpen && <Itemlist items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
)}

export default RestrauntCategory;