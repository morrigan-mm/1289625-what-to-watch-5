import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import Film from "../film/film";
import MyList from "../my-list/my-list";

const App = ({title, genre, releaseDate}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main title={title} genre={genre} releaseDate={releaseDate} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default App;
