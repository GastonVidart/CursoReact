import { findByTestId, fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "App";

test("home worked as expected", async () => {
  //TEST MALO: no se haria asi con react-testing-library, pero igual funciona
  //NO FUNCIONA YA
  /*const { container } = render(<App />);
  const gifLink = await waitForElement(() => container.querySelector(".gif-Link"));
  expect(gifLink).toBeVisible();*/

  //Correcto
  //FIXME
  const { findByTestId} = render(<App />);
  const gifLink = await findByTestId("gif-link");
  expect(gifLink).toBeVisible();
  
});

test("search form", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
