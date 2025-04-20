import { createSlice } from "@reduxjs/toolkit";
import { additems, removeitems } from "./cartSlice";

const grocerySlice=createSlice({
    name : "groceryCart",
    initialState: {
        items : []
    },
    reducers:{
        additem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeitem:(state,action)=>{
            state.items.pop();
        },
        clearitem:(state)=>{
            state.items.length=0;
        }

    }
       
})

export const {additem,removeitem,clearitem}=grocerySlice.actions;

export default grocerySlice.reducer;