import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { additems,removeitems} from "../utils/cartSlice";
import { useSelector } from "react-redux";

const Itemlist=({items,dummy})=>{

    // console.log(items);
    // console.log(dummy);

    const totalItems=useSelector((store)=>store.cart.items)
    console.log(totalItems);


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
        
       
        <div className="">
              {items.map((items,index)=>(
                <div key={`${items.card.info.id}-${index}`} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
             
              
                <div className="w-10/12">
                    <div className="py-2">
                         <span className="font-medium">{items.card.info.name}</span><br></br>
                         <span>₹{items.card.info.price/100}</span>
                        
                    </div>
                     <div className="text-sm text-gray-500">{items.card.info.description} 
                   
                     </div>
                     
                
                    </div>

                    <div className="w-4/12 p-4">
                       
                        <div className="absolute ">
                        <button className="bg-white text-green-600  p-2 rounded-lg shadow-lg mx-7 my-32 pl-10 pr-10 border border-gray-300 font-bold cursor-pointer hover:bg-gray-100" onClick={()=>handleAddItem(items)}>ADD</button>
                       
                        

                        </div>
                       
                        <img className="rounded-lg h-40 w-40" src={items?.card?.info?.imageId ? CDN_URL + items?.card?.info?.imageId : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png" } alt=""/> 
                       
                       
       
                    </div>
                </div>
            ))}
        </div>
    ) 
    
}

export default Itemlist;