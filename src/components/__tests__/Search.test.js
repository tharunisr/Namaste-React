import { cleanup, fireEvent, render, screen} from "@testing-library/react";
import { act,useContext} from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Component",()=>{


  // beforeAll(()=>{
  //   console.log("Before All")
  // })

  // beforeEach(()=>{
  //   console.log("Before Each")
  // })

  // afterAll(()=>{
  //   console.log("After All")
  // })

  // afterEach(()=>{
  //   console.log("After Each");
  // })
  
  it('should render search input text with burger', async() => {
    await act(async () =>   
        render(
        <BrowserRouter>
        
        <Body />
     
      </BrowserRouter>
  ) )

        const cardBefore=screen.getAllByTestId("resCard");
         expect(cardBefore.length).toBe(10);
      
         const searchButton=screen.getByRole("button",{name : "Search"});
         expect(searchButton).toBeInTheDocument();

      const searchInput=screen.getByTestId("searchInput");
      expect(searchInput).toBeInTheDocument();

        fireEvent.change(searchInput, {target : {value : "Bhavan"} });
        
        fireEvent.click(searchButton);

        const cardAfter=screen.queryAllByTestId("resCard");
        expect(cardAfter.length).toBe(2);
    });

    



    
    
})


