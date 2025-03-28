import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";




const Header=()=>{
    const [btnnameReact,setNameReact]=useState("Login");
    const {loggedInUser}=useContext(userContext);
    
    // console.log(loggedInUser);

   const cartItems=useSelector((store)=>store.cart.items)
//    console.log(cartItems);
    // useEffect(()=>{
    //     console.log("Header use Effect called");
    // },[btnnameReact])

    const onlineStatus=useOnlineStatus();
    // console.log("Header Component");
    return (
    <div className="bg-blue-100 flex justify-between shadow-sm"> 
    <div className="logo-container">
        <img className="w-2/4" src={LOGO_URL}></img>
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
          
        
            <li className="px-1 ">
                <img className="w-7" src={"https://cdn-icons-png.flaticon.com/512/1205/1205747.png"}/> 
              
            </li>
            <li className="font-bold">
                <Link to="/cart">
                     Cart - ({cartItems.length} items)
                     </Link></li>
            <li>
            <button className="px-4" onClick={()=> {
                 btnnameReact==="Login" ? setNameReact("Logout") : setNameReact("Login");
            }}>{btnnameReact}</button>
            </li>
            
            <li className="px-2 font-bold">
                {loggedInUser}
            </li>

        </ul>
    </div>
  </div>
)}

export default Header;