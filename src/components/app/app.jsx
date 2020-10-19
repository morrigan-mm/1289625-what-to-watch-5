import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PageMain from "../page-main/page-main";
import PageSignIn from "../page-sign-in/page-sign-in";
import PageAddReview from "../page-add-review/page-add-review";
import PageMovie from "../page-movie/page-movie";
import PageMyList from "../page-my-list/page-my-list";
import Player from "../player/player";

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
          path="/films/:id"
          render={({match}) => {
            const film = films.find(({id}) => id === match.params.id);
            return (
              <PageMovie
                films={films}
                film={film}
              />
            );
          }}
        />
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
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
