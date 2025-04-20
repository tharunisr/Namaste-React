import Contact from "../Contact";
import {fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"


global.alert = jest.fn();

describe("Contact Us Page Testing",()=>{
    it("Testing Contact Page",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
       expect(heading).toBeInTheDocument();
      })
      
      it("Should load Button inside the component",()=>{
          render(<Contact/>);
          const button=screen.getByRole("button");
          expect(button).toBeInTheDocument();
      })
      
      it("Should load submit inside the component",()=>{
          render(<Contact/>);
          const button=screen.getByText("Submit Message");
          expect(button).toBeInTheDocument();
      })
    
      
      
      
      it("Should load input placeholder name inside the component",()=>{
          render(<Contact/>);
          const inputPlaceholder=screen.getByPlaceholderText("John Doe");
          expect(inputPlaceholder).toBeInTheDocument();
      })
      
      it("Should load 2 input box inside the component",()=>{
          render(<Contact/>);
          const inputBoxes=screen.getAllByRole("textbox");
          // console.log(inputBoxes.length)
          expect(inputBoxes.length).toBe(2);
      })
      
      it("Should load input text boxes",()=>{
          render(<Contact/>)
          const para=screen.getAllByRole("paragraph");
          expect(para.length).toBe(1);
      })
      
      it("Should be submit the form",()=>{
        render(<Contact/>)
        const name=screen.getByTestId("name");
        expect(name).toBeInTheDocument();
        fireEvent.change(name, {target : {value : "John"}});
        



        const email=screen.getByTestId("email");
        expect(email).toBeInTheDocument();
        fireEvent.change(email, {target : {value : "John@email.com"}});

        const btn=screen.getByRole("button",{name : "Submit Message"})
        expect(btn).toBeInTheDocument();
       

         const submitText=screen.getByText("We're happy to help! Expect a reply within 24 hours.")
         expect(submitText).toBeInTheDocument();
       
        

        


       
      })
})



