import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import {LOGO_URL} from "../utils/constants"
import GrocerycartItems from "./GrocerycartItems";




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
        
    <div className="w-full bg-white flex justify-between shadow-sm sticky top-0 z-10 "> 
    <div className="flex items-center gap-2">
        <img className="w-[70] bg-red-200 rounded-full" src={LOGO_URL} alt="logo"></img>
        <h1 className="font-bold text-lg ">Food Ordering App</h1>
    </div>
    
   
        <ul className="flex items-center">
            <li className="px-4">
                online : {onlineStatus ? "✅" : "🔴" }
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
                🛒Cart - ({cartItems.length} items)
                     </Link></li>

        <li className="font-bold px-2">
                <Link to="/grocerycart">
                🛒Grocerycart - ({groceryItems.length} items)
                     </Link></li>

            <li>
                <div>
            <button className="px-2  bg-gray-500 text-white rounded-md" onClick={()=> {
                 btnnameReact==="Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnnameReact}</button></div>
            </li>
            
            <li className="px-2 font-bold">
                {loggedInUser}
            </li>
        </ul>

             <div className="md:hidden">


                 <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">🛒Cart - ({cartItems.length} items)</Link></li>
            <li><Link to="/grocerycart">🛒Grocerycart - ({groceryItems.length} items)</Link></li>
            <li>
              <button
                className="px-2 bg-gray-500 text-white rounded-md"
                onClick={() => {
                  btnnameReact === "Login" ? setbtnName("Logout") : setbtnName("Login");
                }}
              >
                {btnnameReact}
              </button>
            </li>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      )}
      
   



    </div>
)}

export default Header;