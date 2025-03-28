import { useEffect,useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { additems, clearitems,removeitems } from "../utils/cartSlice";



const Grocery=()=>{

    const [listproduct,setlistproduct]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

   


    // const groceryCart=useSelector((store)=>store.cart.items)
    // console.log(groceryCart);
       
        const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/api/instamart/home?pageNo=3&layoutId=2671&storeId=1400976&primaryStoreId=1400976&secondaryStoreId=&clientId=INSTAMART-APP")
        const json=await data.json();
        const widgets=json.data.widgets;
        console.log(widgets)
        // console.log(widgets[0].data[0].variations[0].price.mrp);
        setlistproduct(widgets);
    }


       
        
    // const dispatch=useDispatch();
    // const handleAddItems=(data1)=>{
    //     dispatch(additems(data1));
    // }

    
    return <div className="m-4 p-4 flex flex-wrap flex-row cursor-pointer">
             
                    {listproduct.filter(item => item.type !== "NxM_BANNER").flatMap(items =>
                       items.data.map(data => (
                        <div className="m-2 p-2 border-b-2 border-gray-200 " key={data.product_id} >
                         <div className="m-2 p-2 w-56 ">
                                
                                { <img className="rounded-2xl h-40 w-30 bg-slate-50" src={data.variations?.[0]?.images?.[0] ? "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/" + data.variations?.[0]?.images?.[0] : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png" } alt=""/>  }
                                <div className="relative">
                                <p className=" bg-red-500 text-white absolute bottom-[150] left-0 rounded-md">{data.variations?.[0]?.price?.offer_applied?.listing_description ??  data.variations?.[1]?.price?.offer_applied?.listing_description}</p>
                                </div>
                                <p className="font-semibold">{data?.display_name ? data?.display_name : <h1 className="text-blue-500 shadow-sm text-center py-14">Welcome To Swiggy Instamart</h1>}</p>
                                <p className="line-through">₹{data.variations?.[0]?.price?.mrp ??  data.variations?.[1]?.price?.mrp}</p>
                                    <span className="font-bold">₹{data.variations?.[0]?.price?.offer_price ?? data.variations?.[1]?.price?.offer_price
                                    }</span>
                                    <button className="bg-white text-green-600  p-2 rounded-lg shadow-lg mx-5 pl-10 pr-10 border border-gray-300 font-bold cursor-pointer hover:bg-gray-100">ADD</button>
                                     
                                </div>
                           
                            
                               
                                </div>
                              


                     
                          

                    ))
                )}
                   
                   
         
      
         
          
           
           
           
            </div>
    
}

export default Grocery;


