import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GROCERY_IMG } from "../utils/constants";
import { additem, clearitem,removeitem } from "../store/grocerySlice";




const GrocerycartItems=()=>{
    
    const cartItems=useSelector((store)=>store.Grocerycart.items);
    // console.log(cartItems);

    const calculateTotal = () => {
        return cartItems.reduce((total,items)=>{
           return total + (items.price);
        },0)
    
    }
    const dispatch=useDispatch();
    
    const handleAdd=(items)=>{
        dispatch(additem(items))
    }

    const handleremove=()=>{
        dispatch(removeitem());
    }

    const handleclear=()=>{
        dispatch(clearitem());
    }



    return (
                <div className="p-4 m-4 text-center">
                    <div className="w-6/12 m-auto">


                    {cartItems.length >= 1 &&
        <div>
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="pl-[500]"> 
            <button className="bg-gray-500 p-2 m-2 rounded-md text-white" onClick={handleclear} >Clear Cart</button>
            <button className="bg-gray-300 p-2  rounded-md text-black mt-8 ml-12 font-bold" onClick={ handleremove} >Remove</button>
           
            
            </div>
        </div> 
        }





                      {cartItems.length===0 && 
                                 <div>
                                  <div className="flex justify-center">
                                   <img className="w-[271] h-[256] " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_440/InstamartAssets/Empty_Cart_State"}/>
                                   </div>
                                   <h1 className="font-bold m-2 mt-6 text-xl">Your cart is getting lonely</h1>
                                   <h6 className="text-md text-gray-600">Fill it up with all things good!</h6>
                                   <button className="m-3 bg-red-100 p-3 rounded-lg text-orange-500 mt-6 font-semibold text-lg"> <Link to="/grocery">Start Shopping</Link></button>
                                   </div>
                                 }
                     
                     
                     
                     
                     
                     
                      {cartItems.map((items,index)=>(
                        <div data-testid="grocerycart" key={`${items.id}-${index}`} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
                     
                      
                        <div className="w-10/12">
                            <div className="">
                                 <p className="font-medium">{items?.name}</p>
                                 <p className="pt-3">₹{items?.price/100}</p>
                                
                            </div>
                             
                        
                            </div>
        
                            <div className="w-4/12 p-4">
                               
                                <div className="absolute ">
                                <button className="bg-white text-green-600  p-2 rounded-lg shadow-lg mx-7 my-32 pl-10 pr-10 border border-gray-300 font-bold cursor-pointer hover:bg-gray-100" onClick={()=>handleAdd(items)}>ADD</button>
                               
                                
        
                                </div>
                               
                                <img className="rounded-lg h-40 w-40" src={items.image ? GROCERY_IMG + items?.image : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png" } alt=""/> 
                               

               
                            </div>
                        </div>
                    ))}
                    {cartItems.length >=1 && 
                     <div className="flex items-center m-4 p-4">
                        <span className="text-md font-bold">TO PAY </span>
                        <span className="text-md font-bold pl-[500]"> ₹ {calculateTotal()}</span>
                    </div>
                    }
                </div>
        </div>
            ) 
            

}

export default GrocerycartItems;