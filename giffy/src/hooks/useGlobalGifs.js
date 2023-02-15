import { useContext } from "react";
import GifContext from "../context/GifContexts";

export default function useGlobalGifs() {
  return useContext(GifContext).gifs;
}
