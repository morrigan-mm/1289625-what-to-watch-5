import React from "react";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import PageMain from "../page-main/page-main";
import PageLogin from "../page-login/page-login";
import PageAddReview from "../page-add-review/page-add-review";
import PageMovie from "../page-movie/page-movie";
import PageMyList from "../page-my-list/page-my-list";
import Player from "../player/player";
import {filmShape} from "../../prop-types";
import {PageMovieTab} from "../../constants";

const App = ({promo}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageMain promo={promo} />
        </Route>
        <Route exact path="/login">
          <PageLogin />
        </Route>
        <Route exact path="/mylist">
          <PageMyList />
        </Route>
        <Route exact
          path="/films/:id/review"
          render={({match}) => (
            <PageAddReview
              filmId={match.params.id}
            />
          )}
        />
        <Redirect exact from="/films/:id" to={`/films/:id/${PageMovieTab.OVERVIEW}`} />
        <Route exact
          path="/films/:id/:tab"
          render={({match}) => (
            <PageMovie
              filmId={match.params.id}
              activeTab={match.params.tab}
            />
          )}
        />
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: filmShape.isRequired
};

export default App;
