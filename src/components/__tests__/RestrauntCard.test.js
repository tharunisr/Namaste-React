import { render,screen } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import MOCK_DATA from "../mocks/RestrauntCard.json"
import "@testing-library/jest-dom"
import { promotedLabel } from "../RestrauntCard";

it("Should load the Card component with props data",()=>{
    render(<RestrauntCard resData={MOCK_DATA}/>);
    const name=screen.getByText("A2B - Adyar Ananda Bhavan");
    expect(name).toBeInTheDocument();
})


it("Should load with the Promoted label in RestrauntCard",()=>{
    const RestaurantPromoted=promotedLabel(RestrauntCard);
    render(<RestaurantPromoted resData={MOCK_DATA}/>)
    const promote=screen.getByText("Ad");
    expect(promote).toBeInTheDocument();  
})