import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderPageTitle from "../header-page-title/header-page-title";
import HeaderUserBlock from "../header-user-block/header-user-block";
import {filmShape} from "../../prop-types";
import {PageType} from "../../constants";

const filterMyFilms = (filmList) => filmList.filter((film) => film.addedToMyList);

const PageMyList = ({films}) => {
  return (
    <div className="user-page">

      <Header pageType={PageType.USER_PAGE}>
        <HeaderPageTitle>My list</HeaderPageTitle>
        <HeaderUserBlock />
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList films={films} />
      </section>

      <Footer />
    </div>
  );
};

PageMyList.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired
};

const mapStateToProps = (state) => ({
  films: filterMyFilms(state.films)
});

export {PageMyList};

export default connect(mapStateToProps)(PageMyList);
