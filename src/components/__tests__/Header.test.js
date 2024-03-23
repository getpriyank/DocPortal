import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders logo", () => {
  render(<Header />);
  const logoElement = screen.getByAltText("persistent-logo");
  expect(logoElement).toBeInTheDocument();
});
