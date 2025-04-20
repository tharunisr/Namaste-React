import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu"; 
import { useParams } from "react-router-dom";
 import RestrauntCategory from "./RestrauntCategory";
import RestrauntCategoryShimmer from "./RestrauntCategoryShimmer";
import { useState } from "react";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestrauntMenu(resId);
    const [showIndex,setshowIndex]=useState(0);



if(resInfo===null)
    return <RestrauntCategoryShimmer/>

const dummy="dummy"

const {name,avgRating,costForTwoMessage,cuisines,sla,totalRatingsString}=resInfo?.cards[2]?.card?.card?.info;


const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 
   return(

        <div className=" m-4 p-4  text-center">
        <h1 className="text-lg font-bold my-4">{name}</h1>
            <p className="font-semibold">{avgRating } ({totalRatingsString}) · {costForTwoMessage}</p>
            <span className="underline text-red-500 font-bold ">{cuisines.join(",")}</span>
            <p className="">{sla.slaString}</p>
            {/* {category accordin} */}
            {categories.map((category,index)=>(
                //controlled Component
                <RestrauntCategory key={category.card.card.title} data={category?.card?.card} 
               
                // showItem={index===showIndex ? true :false}
                // setshowIndex={()=>setshowIndex(index)} dummy={dummy}

                isOpen={index === showIndex}
              setIsOpen={() => setshowIndex(index === showIndex ? null : index)}
                
                
                />
            ))}
        </div>
           
   )
    
}

export default RestaurantMenu;





