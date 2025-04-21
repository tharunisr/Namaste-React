import { useState,useEffect } from "react";

const uselistofrestraunt=()=>{
    const [listOfRestraunts,setlistofRestraunts]=useState([]);
    const [filteredRestraunt,setfilteredRestraunt]=useState([]);

    useEffect(()=>{
        // console.log("use Effect called");
        fetchData();
    },[])

    const fetchData =async () =>{
        // const data=await fetch("https://68050b56ca467c15be681688.mockapi.io/swiggy/restraunts/list/restrauntlist");
        const data=await fetch("https://namaste-react-ilv4.onrender.com/api/restaurants")
        const json=await data.json();
        
        // console.log(json);
        // console.log(json.data.cards, "test");
        
        let arr1=json.data.cards;
        arr1.splice(0,3);
        // console.log(arr1);
        setlistofRestraunts(arr1);
        setfilteredRestraunt(arr1);
        
    }
    return {
        listOfRestraunts,
        filteredRestraunt,
        setlistofRestraunts,
        setfilteredRestraunt
      };
}

export default uselistofrestraunt;