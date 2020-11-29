import React from "react";
import {Switch, Route, Redirect, Router} from "react-router-dom";
import {PageMovieTab, AppRoute} from "../../constants";
import history from "../../history";
import PageAddReview from "../page-add-review/page-add-review";
import PageLogin from "../page-login/page-login";
import PageMain from "../page-main/page-main";
import PageNotFound from "../page-not-found/page-not-found";
import PageMovie from "../page-movie/page-movie";
import PageMyList from "../page-my-list/page-my-list";
import Player from "../player/player";
import PrivateRoute from "../private-route/private-route";

const handlePlayButtonClick = (id) => {
  history.push(AppRoute.PLAYER.url({id}));
};

const handleExitButtonClick = (id) => {
  history.push(AppRoute.FILM.url({id}));
};

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT.pattern}>
          <PageMain onPlayButtonClick={handlePlayButtonClick} />
        </Route>
        <Route exact path={AppRoute.LOGIN.pattern}>
          <PageLogin />
        </Route>
        <PrivateRoute exact
          path={AppRoute.MY_LIST.pattern}
          render={() => <PageMyList />}
        />
        <PrivateRoute exact
          path={AppRoute.ADD_REVIEW.pattern}
          render={({match}) => (
            <PageAddReview
              filmId={Number(match.params.id)}
            />
          )}
        />
        <Redirect exact
          from={AppRoute.FILM.pattern}
          to={AppRoute.FILM_TAB.url({tab: PageMovieTab.OVERVIEW})}
        />
        <Route exact
          path={AppRoute.FILM_TAB.pattern}
          render={({match}) => (
            <PageMovie
              activeTab={match.params.tab}
              filmId={Number(match.params.id)}
              onPlayButtonClick={handlePlayButtonClick}
            />
          )}
        />
        <Route exact
          path={AppRoute.PLAYER.pattern}
          render={({match}) => (
            <Player
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
