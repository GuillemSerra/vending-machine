import { Product } from "./Product";
import { render, screen } from "@testing-library/react";

describe("Product", () => {
  it("renders correctly", () => {
    render(<Product title={"Fanta"} price={2} stock={2} slot_id={"abc"} />);
    expect(screen.getByText("Fanta")).toBeInTheDocument();
  });
});
