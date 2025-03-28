import { useState,useEffect } from "react";

const uselistofrestraunt=()=>{
    const [listOfRestraunts,setlistofRestraunts]=useState([]);
    const [filteredRestraunt,setfilteredRestraunt]=useState([]);

    useEffect(()=>{
        // console.log("use Effect called");
        fetchData();
    },[])

    const fetchData =async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9252007&lng=78.1197754&collection=80435&tags=layout_CCS_PureVeg&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
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