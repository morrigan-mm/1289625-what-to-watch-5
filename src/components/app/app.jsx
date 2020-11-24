import React from "react";
import {Switch, Route, Redirect, Router} from "react-router-dom";
import PageMain from "../page-main/page-main";
import PageLogin from "../page-login/page-login";
import PageAddReview from "../page-add-review/page-add-review";
import PageMovie from "../page-movie/page-movie";
import PageMyList from "../page-my-list/page-my-list";
import Player from "../player/player";
import {PageMovieTab} from "../../constants";
import history from "../../history";
import withPlayingState from "../../hocs/with-playing-state/with-playing-state";
import PrivateRoute from "../private-route/private-route";
import PageNotFound from "../page-not-found/page-not-found";

const WithPlayingStatePlayer = withPlayingState(Player);

const handlePlayButtonClick = (id) => {
  history.push(`/player/${id}`);
};

const handleExitButtonClick = (id) => {
  history.push(`/films/${id}`);
};

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <PageMain onPlayButtonClick={handlePlayButtonClick} />
        </Route>
        <Route exact path="/login">
          <PageLogin />
        </Route>
        <PrivateRoute exact
          path={`/mylist`}
          render={() => <PageMyList />}
        />
        <PrivateRoute exact
          path="/films/:id/review"
          render={({match}) => (
            <PageAddReview
              filmId={Number(match.params.id)}
            />
          )}
        />
        <Redirect exact from="/films/:id" to={`/films/:id/${PageMovieTab.OVERVIEW}`} />
        <Route exact
          path="/films/:id/:tab"
          render={({match}) => (
            <PageMovie
              activeTab={match.params.tab}
              filmId={Number(match.params.id)}
              onPlayButtonClick={handlePlayButtonClick}
            />
          )}
        />
        <Route exact
          path="/player/:id"
          render={({match}) => (
            <WithPlayingStatePlayer
              filmId={Number(match.params.id)}
              onExitButtonClick={handleExitButtonClick}
            />
          )} />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
