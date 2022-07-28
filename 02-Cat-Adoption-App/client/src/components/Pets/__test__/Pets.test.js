import { render, screen } from "@testing-library/react";
import Pets from "../Pets";

describe("pets", () => {
  test("should render 5 cards", async () => {
    render(<Pets />);
    //findAllByRole is for async and await
    //this is flawed test
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toBe(5);
  });
});
