import { render, screen } from "@testing-library/react";
import Cards from "../Cards";
import cats from "../../../mocks/cats.json";

describe("cards", () => {
  test("should render 5 cards", () => {
    render(<Cards cats={cats} />);
    //use article instead of div so that to get the elements
    expect(screen.getAllByRole("article").length).toBe(5);
  });
});
