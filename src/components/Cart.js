import { clearitems,removeitems } from "../store/cartSlice";
import Itemlist from "./Itemlist"
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";


const Cart=()=>{

    
    const cartItems=useSelector((store)=>store.cart.items)
    // console.log(cartItems);






   

    


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
    <div className="w-full sm:w-8/12 lg:w-6/12 m-auto">
      {cartItems.length >= 1 && (
        <div>
          <h1 className="text-2xl font-semibold">Cart</h1>
          <div className="flex justify-center sm:justify-end gap-4 mt-4 ">
            <button
              className="bg-gray-500 p-2 rounded-md text-white"
              onClick={handleClearItems}
            >
              Clear Cart
            </button>
            <button
              className="bg-gray-300 p-2 rounded-md text-black font-bold"
              onClick={handleRemoveItems}
            >
              Remove
            </button>
          </div>
        </div>
      )}
  
      {cartItems.length === 0 && (
        <div className="text-center">
          <div className="flex justify-center">
            <img
              className="w-48 h-48 object-contain"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="Empty Cart"
            />
          </div>
          <h1 className="font-bold mt-6 text-xl">Your cart is empty</h1>
          <h6 className="text-md text-gray-600">
            You can go to the home page to view more restaurants
          </h6>
          <Link to="/">
            <button className="mt-6 bg-orange-500 px-6 py-3 rounded-lg text-white font-bold">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      )}
  
      <Itemlist items={cartItems} />
  
      {cartItems.length >= 1 && (
        <div className="flex justify-between items-center m-4 p-4 border-t border-gray-200">
          <span className="text-md font-bold">TO PAY</span>
          <span className="text-md font-bold">₹ {calculateTotal()}</span>
        </div>
      )}
    </div>
  </div>
  
}


export default Cart;

