import React from "react";

import Gif from "components/Gif";
import { useSingleGif } from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

const { REACT_APP_NAME } = process.env;

export default function GifDetails({ params }) {
  const { gif, isLoading, isError } = useSingleGif(params.gifId);

  const title = gif ? `${gif.title} | ${REACT_APP_NAME}` : "";

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>{`Cargando ... ${REACT_APP_NAME}`}</title>
        </Helmet>
        <Spinner />
      </>
    );

  if (isError) return <Redirect to="/404" />;

  return Boolean(gif) ? (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Gif title={gif.title} id={gif.id} url={gif.url}></Gif>
    </>
  ) : (
    <Gif title="Gif No Encontrado"></Gif>
  );
}
