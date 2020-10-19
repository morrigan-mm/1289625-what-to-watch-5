import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, promo} from "./mocks/films";
console.log(films.map((film) => film.genre));
ReactDOM.render(
    <App
      films={films}
      promo={promo}
    />,
    document.getElementById(`root`)
);
