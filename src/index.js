import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const PromoCardInfo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: `2014-02-06`
};

ReactDOM.render(
    <App
      title={PromoCardInfo.TITLE}
      genre={PromoCardInfo.GENRE}
      releaseDate={PromoCardInfo.RELEASE_DATE}
    />,
    document.getElementById(`root`)
);
