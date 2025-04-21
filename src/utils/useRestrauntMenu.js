import { useState,useEffect, use } from "react";
import { MENU_API } from "./constants";
import { redirect } from "react-router-dom";

const useRestrauntMenu=(resId)=>{
    
    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        // const data=await fetch(MENU_API + resId);
        const data=await 
        fetch("https://namaste-react-ilv4.onrender.com/api/menu/" + resId, {
            method: "GET",
            credentials: "include", // ✅ include cookies / auth
          })
        const json=await data.json();
        setresInfo(json.data);
        
    }

    return resInfo;

}

export default useRestrauntMenu;