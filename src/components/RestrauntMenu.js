import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu"; 
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo=useRestrauntMenu(resId);





//     // console.log(json.data.cards[0]?.card?.card?.text);
//     setresInfo(json.data);
//     // console.log(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card.itemCards[0]?.card.info.id);
//     // setresInfo();
// };

if(resInfo===null)
    return <Shimmer/>


const {name,avgRating,costForTwoMessage,cuisines,sla}=resInfo?.cards[2]?.card?.card?.info;


//  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 

// const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.hasOwnProperty("itemCards") ? 
// resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card 
// : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

let itemCards;
// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

if( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.hasOwnProperty("itemCards"))
{
    itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
}
else if(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.hasOwnProperty("itemCards"))
{
            itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
}
else if(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.hasOwnProperty("itemCards"))
    {
        itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.itemCards;
}
else{
    itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card.categories[0].itemCards;
}


// const {image}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.imageId;
// console.log(image);

// const a;
// if(a>5{
//     a =items
// })

   

    return (
        <div className="m-4 p-4">
            {/* <h1>{resName}</h1> */}
            <h1 className="text-lg font-semibold">{name}</h1>
            <p>{avgRating + " Ratings"} {costForTwoMessage}</p>
            <p>{cuisines.join(",")}</p>
            <p>{sla.slaString}</p>
           
            <h3 className="font-thin">Menu</h3>
            <div className="container">
            <ul className="m-4 p-4">
                {itemCards.map(item=> <li key={item.card.info.id}>
                    <div className="content">
                    <h3 className="font-bold text-md">{item.card.info.name}  </h3>
                    <span>{"₹" + item.card.info.price/100}</span> 
                    </div>
                    <div className="pl-[1000]">
          <img className="w-32 h-32" 
          src={item.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}` : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png"} 
          alt={item.card.info.name}
          > 
          </img> 
          <hr></hr>
          </div>
         
          
           
                    </li>)}
            </ul>
           
           
            </div>
        </div>
    )
}

export default RestaurantMenu;





