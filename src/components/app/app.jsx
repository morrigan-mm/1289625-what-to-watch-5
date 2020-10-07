import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = ({title, genre, releaseDate}) => (
  <MainPage title={title} genre={genre} releaseDate={releaseDate}/>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default App;
