import Grocery from "../Grocery";
import {render,screen,act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/GroceryItemsMock.json"
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import GrocerycartItems from "../GrocerycartItems";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA)
    })
})

global.alert = jest.fn();


it("Should load the Grocery items",async ()=>{
    await act(async()=> render(

    <Provider store={appStore}><Grocery/></Provider>
))


    const groceryItems=screen.getAllByTestId("groceryTest")
    expect(groceryItems.length).toBe(15);

})

it("Should load the Grocery items with Origami Non Woven",async ()=>{
    await act(async()=> render(

    <Provider store={appStore}><Grocery/></Provider>
))


    const Item=screen.getByText("Origami Non Woven Reusable Kitchen Towel Roll Pack Of 1 * 80 Pulls(Assorted colours)")
    expect(Item).toBeInTheDocument();

})


it("Should load the Grocery Item and add item to the cart",async ()=>{
    await act(async()=> render(

                    <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <Grocery/>
                    <GrocerycartItems />
                </Provider>
                </BrowserRouter>
))

const addBtn = screen.getAllByRole("button", {name:"ADD"})
    

    const Beforecart=screen.getByText('🛒Grocerycart - (0 items)');
    expect(Beforecart).toBeInTheDocument();

    fireEvent.click(addBtn[0]);

    const Afteradd=screen.getByText('🛒Grocerycart - (1 items)');
    expect(Afteradd).toBeInTheDocument();

    fireEvent.click(addBtn[2]);

    const Aftercart=screen.getByText('🛒Grocerycart - (2 items)');
    expect(Aftercart).toBeInTheDocument();

    const grocerycount=screen.getAllByTestId("grocerycart");
    expect(grocerycount.length).toBe(2);
    
})



it("Should load the card and clear the cart",async()=>{

    await act(async()=> render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <Grocery/>
        <GrocerycartItems />
    </Provider>
    </BrowserRouter>
))



const removeOneitem = screen.getByRole("button", { name: "Remove" });
fireEvent.click(removeOneitem);

const afterremove=screen.getAllByTestId("grocerycart");

expect(afterremove.length).toBe(1)
  
})