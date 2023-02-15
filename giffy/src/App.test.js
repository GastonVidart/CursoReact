import { render } from "@testing-library/react";
import App from "./App";

test("La app renderiza!", async () => {
  /*render(<App />);
  const linkElement = screen.getByText(/Última Búsqueda/i);*/
  const { findByText } = render(<App />);
  const linkElement = await findByText(/Última Búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});
