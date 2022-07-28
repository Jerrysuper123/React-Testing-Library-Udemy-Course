import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Card from "../Card";

const cardProps = {
  name: "Tom",
  phone: "11222",
  email: "email@gmail.com",
  image: {
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
    alt: "cute cat",
  },
  favoured: false,
};

describe("Card", () => {
  test("name should exist", () => {
    //use spread operator to fill in the props
    render(<Card {...cardProps} />);

    expect(
      screen.getByRole("heading", {
        name: /Tom/i,
      })
    ).toBeInTheDocument();
  });

  test("phone number should exist", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/11222/i)).toBeInTheDocument();
  });

  test("email should exist", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/email@gmail.com/i)).toBeInTheDocument();
  });

  //test if an image has been loaded properly
  test("should should img with correct source", () => {
    render(<Card {...cardProps} />);
    //get img by alt text and compare with url
    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test("should see outlined heart", () => {
    render(<Card {...cardProps} />);
    //query is for element that might not exist in the dom

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test("should see filled hear", () => {
    render(<Card {...cardProps} favoured={true} />);
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test("should toggle heart status", () => {
    render(<Card {...cardProps} />);
    userEvents.click(screen.getByRole("button"));
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
