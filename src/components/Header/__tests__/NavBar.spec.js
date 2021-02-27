import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./../NavBar";

describe("The NavBar Component", () => {
  test("it should have a link to the Home Page", () => {
    render(<NavBar />);
    const item = screen.getByText(/Home Page/i);
    expect(item).toBeInTheDocument();
  });

  test("it should have a link to Page One", () => {
    render(<NavBar />);
    const item = screen.getByText(/Page One/i);
    expect(item).toBeInTheDocument();
  });

  test("it should a logo image", () => {
    render(<NavBar />);
    const logo = document.querySelector("img");
    expect(logo.src).toContain(
      "https://www.freelogodesign.org/Content/img/logo-samples/flooop.png",
    );
  });
});
