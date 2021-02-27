import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./../Card.js";

describe("The Card Component", () => {
  test("it should have the Lizard image", () => {
    render(<Card />);
    const item = screen.getByTitle("Contemplative Reptile");
    expect(item).toBeInTheDocument();
  });
});
