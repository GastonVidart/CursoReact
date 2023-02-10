import { render } from "@testing-library/react";
import App from "./App";

test("La app renderiza!", () => {
  /*render(<App />);
  const linkElement = screen.getByText(/Última Búsqueda/i);*/
  const { getByText } = render(<App />);
  const linkElement = getByText(/Última Búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});
