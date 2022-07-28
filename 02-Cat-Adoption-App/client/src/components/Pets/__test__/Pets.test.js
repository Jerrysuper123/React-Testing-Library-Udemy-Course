import { render, screen } from "@testing-library/react";
import Pets from "../Pets";
import { rest } from "msw";
import { setupServer } from "msw/node";
import catsMock from "../../../mocks/cats.json";

const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("pets", () => {
  test("should render 5 cards", async () => {
    render(<Pets />);
    //findAllByRole is for async and await
    //this is flawed test
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toBe(5);
  });
});
