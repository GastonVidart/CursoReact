import { act, renderHook } from "@testing-library/react";
import useForm from "./hooks";

const setup = (params) => renderHook(() => useForm(params));

test("debería cambiar keyword", () => {
  const { result } = setup({ initialKeyword: "", initialRating: "g" });

  act(() => result.current.updateKeyword("batman"));

  expect(result.current.keyword).toBe("batman");
});

test("debería usar initial values keyword", () => {
  const { result } = setup({ initialKeyword: "matrix", initialRating: "g" });

  expect(result.current.keyword).toBe("matrix");
});

test("debería actualizar times 2 veces", () => {
  const { result } = setup({ initialKeyword: "", initialRating: "g" });

  act(() => {
    result.current.updateKeyword("bat");
    result.current.updateKeyword("batman");
  });

  expect(result.current.keyword).toBe("batman");
  expect(result.current.times).toBe(2);
});
