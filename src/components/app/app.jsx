import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import PageMain from "../page-main/page-main";
import PageSignIn from "../page-sign-in/page-sign-in";
import PageAddReview from "../page-add-review/page-add-review";
import PageMovie from "../page-movie/page-movie";
import PageMyList from "../page-my-list/page-my-list";
import Player from "../player/player";
import {filmShape} from "../../prop-types";
import {PageMovieTab} from "../../constants";

const filterMyFilms = (filmList) => filmList.filter((film) => film.addedToMyList);

const App = ({promo, films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageMain
            promo={promo}
            films={films}
          />
        </Route>
        <Route exact path="/login">
          <PageSignIn />
        </Route>
        <Route exact path="/mylist">
          <PageMyList
            films={filterMyFilms(films)}
          />
        </Route>
        <Route exact
          path="/films/:id/review"
          render={({match}) => {
            const film = films.find(({id}) => id === match.params.id);
            return (
              <PageAddReview
                film={film}
              />
            );
          }}/>
        <Redirect exact from="/films/:id" to={`/films/:id/${PageMovieTab.OVERVIEW}`} />
        <Route exact
          path="/films/:id/:tab"
          render={({match}) => {
            const film = films.find(({id}) => id === match.params.id);
            return (
              <PageMovie
                films={films}
                film={film}
                activeTab={match.params.tab}
              />
            );
          }}
        />
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: filmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired
};

export default App;
