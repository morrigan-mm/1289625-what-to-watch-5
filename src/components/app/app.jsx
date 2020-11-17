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
import withPlayingState from "../../hocs/with-playing-state/with-playing-state";

const WithPlayingStatePlayer = withPlayingState(Player);

const getPlayButtonClickHandler = (history) => (id) => {
  history.push(`/player/${id}`);
};

const getExitButtonClickHandler = (history) => (id) => {
  history.push(`/films/${id}`);
};

const App = ({promo}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <PageMain
            onPlayButtonClick={getPlayButtonClickHandler(history)}
            promo={promo}
          />
        )}>
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
          render={({match, history}) => (
            <PageMovie
              activeTab={match.params.tab}
              filmId={match.params.id}
              onPlayButtonClick={getPlayButtonClickHandler(history)}
            />
          )}
        />
        <Route exact
          path="/player/:id"
          render={({match, history}) => (
            <WithPlayingStatePlayer
              filmId={match.params.id}
              onExitButtonClick={getExitButtonClickHandler(history)}
            />
          )} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: filmShape.isRequired
};

export default App;
