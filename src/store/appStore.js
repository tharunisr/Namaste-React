import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import groceryReducer from "./grocerySlice"

const appStore=configureStore({
 reducer:{
        cart:cartReducer,
        Grocerycart:groceryReducer
 }
}

)




export default appStore;