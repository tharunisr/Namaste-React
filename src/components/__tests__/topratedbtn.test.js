import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { render,screen,act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });


it("Should load the toprated card",async () =>
    {

    await act (async()=>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    )
   
    
    const beforeClick=screen.getAllByTestId("resCard");
    expect(beforeClick.length).toBe(10);

    const topBtn=screen.getByRole("button",{name:"Top Rated Restraunts" })
    fireEvent.click(topBtn);


    const afterClick=screen.getAllByTestId("resCard");
    expect(afterClick.length).toBe(7)
    
})