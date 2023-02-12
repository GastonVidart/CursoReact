import React from "react";

import Gif from "components/Gif";
import { useSingleGif } from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";

export default function GifDetails({ params }) {
  const { gif, isLoading, isError } = useSingleGif(params.gifId);

  if (isLoading) return <Spinner />;

  if (isError) return <Redirect to="/404" />;

  return Boolean(gif) ? (
    <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
  ) : (
    <Gif title="Gif No Encontrado"></Gif>
  );
}
