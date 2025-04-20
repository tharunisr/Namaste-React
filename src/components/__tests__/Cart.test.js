import RestrauntMenu from "../RestrauntMenu";
import {render,screen,act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/RestrauntMenu.json"
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA)
    })
})
global.alert = jest.fn();


it("Should load the Restraunt Menu with South Indian 42",async ()=>{
    await act(async()=> render(

    <Provider store={appStore}><RestrauntMenu/></Provider>
))


    const accordionHeader=screen.getByText("South Indian (42)")
    expect(accordionHeader).toBeInTheDocument();

})

it("Should load the Restraunt Menu with South Indian 42 items",async ()=>{
    await act(async()=> render(

    <Provider store={appStore}><RestrauntMenu/></Provider>
))


    const accordionHeader=screen.getByText("South Indian (42)")
    expect(accordionHeader).toBeInTheDocument();
    
    fireEvent.click(accordionHeader);
    
    const fooditems=screen.getAllByTestId("food-items");
    expect(fooditems.length).toBe(42)

})

it("Should load the Restraunt Menu add 2 item in the cart",async()=>
{
    await act(async()=> render(
        <BrowserRouter>
    <Provider store={appStore}>
       
        <Header/>
        <RestrauntMenu/>
        <Cart/>
    </Provider>
    </BrowserRouter>
))

const accordionHeader=screen.getByText("South Indian (42)")
expect(accordionHeader).toBeInTheDocument();

    fireEvent.click(accordionHeader);

    const fooditems=screen.getAllByTestId("food-items");
    expect(fooditems.length).toBe(42)


    const addBtn = screen.getAllByRole("button", {name:"ADD"})
    

    const BeforecartHeading=screen.getByText('🛒Cart - (0 items)');
    expect(BeforecartHeading).toBeInTheDocument();

    fireEvent.click(addBtn[0]);

    const AftercartHeading=screen.getByText('🛒Cart - (1 items)');
    expect(AftercartHeading).toBeInTheDocument();

    fireEvent.click(addBtn[2]);

    const Aftercart=screen.getByText('🛒Cart - (2 items)');
    expect(Aftercart).toBeInTheDocument();

    const totalitems=screen.getAllByTestId("food-items");
    expect(totalitems.length).toBe(44)


})

it("Should load the card and clear the cart",async()=>{

    await act(async()=> render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <RestrauntMenu/>
        <Cart />
    </Provider>
    </BrowserRouter>
))

const accordionHeader=screen.getByText("South Indian (42)")
expect(accordionHeader).toBeInTheDocument();

    fireEvent.click(accordionHeader);


const Allitems=screen.getAllByTestId("food-items");

expect(Allitems.length).toBe(44);



expect(screen.getByText("Cart")).toBeInTheDocument();

const removeOneitem = screen.getByRole("button", { name: "Remove" });
fireEvent.click(removeOneitem);

const afterremove=screen.getAllByTestId("food-items");

expect(afterremove.length).toBe(43);
  
})