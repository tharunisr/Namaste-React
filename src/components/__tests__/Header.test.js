import {fireEvent, render,screen} from "@testing-library/react";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import "@testing-library/jest-dom";

it("Should load Login Button inside the Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name : "Login"})

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component With a Cartitems",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems=screen.getByText('🛒Cart - (0 items)');
    expect(cartItems).toBeInTheDocument();
    
})

it("Should Change Login Button to Logout Button onclick",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name : "Login"})

    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:"Logout"})

    expect(logoutButton).toBeInTheDocument();
})