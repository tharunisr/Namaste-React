import { useEffect,useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { additem } from "../store/grocerySlice";



const Grocery=()=>{

    const [listproduct,setlistproduct]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])



    

   


    // const groceryCart=useSelector((store)=>store.cart.items)
    // console.log(groceryCart);
       
    const fetchData = async () => {
            
              
            const data = await fetch("https://67f6276f913986b16fa6f4c2.mockapi.io/grocery/grocery")
            const json = await data.json();
            // console.log(json);
            setlistproduct(json);
            
        } 
  const dispatch=useDispatch();
        const handleAdd = (item) => {
            dispatch(additem(item));
            {window.alert(item.name+ " Added Succesfully")}

          };
       
        
    // const dispatch=useDispatch();
    // const handleAddItems=(data1)=>{
    //     dispatch(additems(data1));
    // }

    
    return <div >
<div className="m-4 p-4 flex flex-wrap flex-row cursor-pointer ">
    
        {listproduct.map((data)=>
            (
                // <div key={data.id}>
                //     <h1>{data.name}</h1>
                // </div>
                <div data-testid="groceryTest" className="m-2 p-2 border-b-2 border-gray-200 hover:bg-gray-100 " key={data.id} >
                <div className="m-2 p-2 w-56 ">
                       
                       { <img className="rounded-2xl h-40 w-30 bg-slate-50" src={data.image ? "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/" + data.image : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png" } alt=""/>  }
                       <div className="relative">
                <h1 className="bg-[#f35252] text-[#fff] rounded-sm font-thin absolute bottom-[150] left-1">{data.discount}</h1>

            </div>
                       <p className="font-semibold">{data?.name}</p>
                       <p className="line-through">₹{data.price}</p>
                        <span className="font-bold">₹{data.offer_price}</span>
                        <button className=" bg-white text-green-600  p-2 rounded-lg shadow-lg mx-5 pl-10 pr-10 border border-gray-300 font-bold cursor-pointer hover:bg-gray-100" onClick={()=>handleAdd(data)}>ADD</button>
                        
                       </div>
                  
                   
                   
                       </div>
            
               ))}
            </div>
            </div>

}


export default Grocery;


