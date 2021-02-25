import { render, screen } from "@testing-library/react";
import Header from "./../Header";

describe("The Header Component", () => {
  test("it should have a link to the Home Page", () => {
    render(<Header />);
    const homePage = screen.getByLabelText("HomePage");
    expect(homePage).toBeInTheDocument();
  });
});
