import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import {LOGO_URL} from "../utils/constants"
import GrocerycartItems from "./GrocerycartItems";




const Header=()=>{
    const [btnnameReact,setNameReact]=useState("Login");
    const {loggedInUser}=useContext(userContext);
    
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
        
    <div className="bg-blue-100 flex justify-between shadow-sm"> 
    <div className="logo-container">
        <img className="w-[30%] bg-red-200" src={LOGO_URL} alt="logo"></img>
    </div>
    
    <div className="flex items-center">
        <ul className="flex">
            <li className="px-4">
                online Status : {onlineStatus ? "✅" : "🔴" }
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
                 btnnameReact==="Login" ? setNameReact("Logout") : setNameReact("Login");
            }}>{btnnameReact}</button></div>
            </li>
            
            <li className="px-2 font-bold">
                {loggedInUser}
            </li>

        </ul>
    </div>
  </div>
)}

export default Header;