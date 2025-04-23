import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { additems,removeitems} from "../store/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Itemlist=({items,dummy})=>{

    // console.log(items);
    // console.log(dummy);

    const totalItems=useSelector((store)=>store.cart.items)
    // console.log(totalItems);


    const dispatch=useDispatch();
    const handleAddItem=(items)=>{
    
       dispatch(additems(items));
       {window.alert(items.card.info.name + " Added Succesfully")}

        // dispatch action
    }

    // const handleRemoveItem=()=>{
    //     dispatch(remove());
    // }

   
       

    return (
        
       
        <div >
              {items.map((items,index)=>(
                <div data-testid="food-items" key={`${items?.card?.info?.id}-${index}`} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
             
              
                <div className="w-10/12">
                    <div className="py-2">
                         <span className="font-medium">{items.card.info.name}</span><br></br>
                         <span>₹{items?.card?.info?.price/100}</span>
                        
                    </div>
                     <div className="text-sm text-gray-500">{items?.card?.info?.description} 
                   
                     </div>
                     
                
                    </div>

                    <div className="w-full sm:w-4/12 p-4 relative">
                        <img className="rounded-xl w-full h-40 object-cover" 
                        src={items?.card?.info?.imageId ? CDN_URL + items?.card?.info?.imageId
                        : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png"}
                        alt={items?.card?.info?.name}
                        />
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <button className="bg-white text-green-600 px-6 py-2 rounded-lg shadow-md border 
                            border-gray-300 font-bold hover:bg-gray-100"onClick={() => handleAddItem(items)}>ADD
                            </button>
                        </div>
                    </div>
             </div>
            ))}
        </div>
    ) 
    
}

export default Itemlist;