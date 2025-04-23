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
  <div className="w-full sm:w-10/12 lg:w-6/12 m-auto">

    {cartItems.length >= 1 && (
      <div>
        <h1 className="text-2xl font-semibold">Cart</h1>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-end mt-4">
          <button
            className="bg-gray-500 p-2 rounded-md text-white"
            onClick={handleclear}
          >
            Clear Cart
          </button>
          <button
            className="bg-gray-300 p-2 rounded-md text-black font-bold"
            onClick={handleremove}
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
            className="w-52 h-52"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_440/InstamartAssets/Empty_Cart_State"
            alt="Empty Cart"
          />
        </div>
        <h1 className="font-bold mt-6 text-xl">Your cart is getting lonely</h1>
        <h6 className="text-md text-gray-600">Fill it up with all things good!</h6>
        <Link to="/grocery">
          <button className="mt-6 bg-red-100 px-6 py-3 rounded-lg text-orange-500 font-semibold text-lg">
            Start Shopping
          </button>
        </Link>
      </div>
    )}

    {cartItems.map((items, index) => (
      <div
        data-testid="grocerycart"
        key={`${items.id}-${index}`}
        className="m-2 p-2 border-b-2 border-gray-200 text-left flex flex-col sm:flex-row justify-between"
      >
        <div className="sm:w-8/12">
          <p className="font-medium">{items?.name}</p>
          <p className="pt-2">₹{items?.price}</p>
        </div>

        <div className="sm:w-4/12 p-2 relative">
          <img
            className="rounded-lg h-40 w-full object-cover"
            src={
              items.image
                ? GROCERY_IMG + items.image
                : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png"
            }
            alt=""
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <button
              className="bg-white text-green-600 px-6 py-2 rounded-lg shadow-md border border-gray-300 font-bold hover:bg-gray-100"
              onClick={() => handleAdd(items)}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    ))}

    {cartItems.length >= 1 && (
      <div className="flex justify-between items-center m-4 p-4 border-t border-gray-200">
        <span className="text-md font-bold">TO PAY</span>
        <span className="text-md font-bold">₹ {calculateTotal()}</span>
      </div>
    )}
  </div>
</div>

            ) 
            

}

export default GrocerycartItems;