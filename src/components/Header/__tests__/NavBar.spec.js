import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./../NavBar";

describe("The Header Component", () => {
  test("it should have a link to the Home Page", () => {
    render(<NavBar />);
    const item = screen.getByText(/Page One/i);
    expect(item).toBeInTheDocument();
  });
});
