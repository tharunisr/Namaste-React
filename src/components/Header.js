import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import {LOGO_URL} from "../utils/constants"
import GrocerycartItems from "./GrocerycartItems";
import {Menu, X } from "lucide-react";




const Header=()=>{
    const [btnnameReact,setbtnName]=useState("Login");
    const {loggedInUser}=useContext(userContext);
    const [isOpen,setIsOpen]=useState(false)
    
    // console.log(loggedInUser);

   const cartItems=useSelector((store)=>store.cart.items)
   const groceryItems=useSelector((store)=>store.Grocerycart.items);

//    console.log(cartItems);
    // useEffect(()=>{
    //     console.log("Header use Effect called");
    // },[btnnameReact])

    const onlineStatus=useOnlineStatus();

    // const logo = new URL('../utils/images/food_drink.png', import.meta.url).href;
    // console.log(logo);
    // console.log("Header Component");
    return (
        
    <div className="w-full bg-white flex justify-between shadow-sm sticky top-0 z-10 h-20"> 
    <div className="flex items-center">
        <img className="w-10  rounded-full" src={LOGO_URL} alt="logo" />
        <h1 className="font-bold text-lg">FoodRush</h1>
    </div>
    
   
        <ul className="hidden md:flex gap-4 items-center text-gray-800 text-sm font-medium">
            <li className="px-4">
                Online : {onlineStatus ? "✅" : "🔴" }
            </li>
            <li className="px-4">
                <Link to="/">Home</Link> 
            </li>
            <li className="px-4">
                <Link to="/about">About</Link>
            </li>
            <li className="px-4">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
                <Link to="/grocery">Grocery</Link>
            </li>
          
    
            <li className="font-bold px-2">
                <Link to="/cart">
                🛒Food - ({cartItems.length} items)
                     </Link></li>

        <li className="font-bold px-2">
                <Link to="/grocerycart">
                🛒Grocery - ({groceryItems.length} items)
                     </Link></li>

            <li>
                <div>
            <button className="px-2  bg-gray-500 text-white rounded-lg" onClick={()=> {
                 btnnameReact==="Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnnameReact}</button></div>
            </li>
            
            <li className="px-2 font-bold">
                {loggedInUser}
            </li>
        </ul>

        <div className="md:hidden fixed top-6 right-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
     {isOpen && <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
          <li>Online: {onlineStatus ? "✅" : "⛔"}</li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          <li><Link to="/grocery" onClick={() => setIsOpen(false)}>Grocery</Link></li>
          <li className="font-bold" onClick={() => setIsOpen(false)}>
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                🛒Food - ({cartItems.length} items)
                     </Link></li>

        <li className="font-bold">
                <Link to="/grocerycart" onClick={() => setIsOpen(false)}>🛒Grocery - ({groceryItems.length} items)
                     </Link></li>
         
          <button
            className="bg-gray-700 text-white px-3 py-1 rounded"
            onClick={() => {
              setbtnName(btnnameReact === "Login" ? "Logout" : "Login");
              setIsOpen(false);
            }}
          >
            {btnnameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
   
          }


    </div>
)}

export default Header;