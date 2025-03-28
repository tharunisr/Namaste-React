import { clearitems,removeitems } from "../utils/cartSlice";
import Itemlist from "./Itemlist";
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";


const Cart=()=>{

    
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);






   

    


    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
          return total + (item.card.info.price / 100);
        }, 0);
      };

    const dispatch=useDispatch();
    const handleClearItems=()=>{
        dispatch(clearitems());
    }

    const handleRemoveItems=()=>{
        dispatch(removeitems());
    }


    return <div className="p-4 m-4 text-center">

       
        <div className="w-6/12 m-auto ">
        {cartItems.length >= 1 &&
        <div>
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="pl-[500]"> 
            <button className="bg-gray-500 p-2 m-2 rounded-md text-white" onClick={handleClearItems} >Clear Cart</button>
            <button className="bg-gray-300 p-2  rounded-md text-black mt-8 ml-12 font-bold" onClick={ handleRemoveItems} >Remove</button>
            
            
            </div>
        </div> 
        }
        {cartItems.length===0 && 
            <div>
             <div className="flex justify-center">
              <img className="w-[271] h-[256] " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"}/>
              </div>
              <h1 className="font-bold m-2 mt-6 text-xl">Your cart is empty</h1>
              <h6 className="text-md text-gray-600">You can go to home page to view more restaurants</h6>
              <button className="m-3 bg-orange-500 p-3 rounded-lg text-white mt-6 font-bold"> <Link to="/">SEE RESTAURANTS NEAR YOU</Link></button>
              </div>
            }
           <Itemlist items={cartItems}/> 
        
          
        
           
           
           {cartItems.length >=1 && 
           <div className="flex items-center m-4 p-4">
              <span className="text-md font-bold">TO PAY </span>
              <span className="text-md font-bold pl-[500]"> ₹ {calculateTotal()}</span>
           </div>
           }
    </div>
 
        
    </div>
}


export default Cart;

