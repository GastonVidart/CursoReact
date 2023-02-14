import React from "react";

import Gif from "components/Gif";
import { useSingleGif } from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import useSEO from "hooks/useSEO";

export default function GifDetails({ params }) {
  const { gif, isLoading, isError } = useSingleGif(params.gifId);

  const title = gif ? gif.title : "";
  useSEO({ description: `Descripción de ${title}`, title });

  if (isLoading) return <Spinner />;

  if (isError) return <Redirect to="/404" />;

  return Boolean(gif) ? (
    <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
  ) : (
    <Gif title="Gif No Encontrado"></Gif>
  );
}
