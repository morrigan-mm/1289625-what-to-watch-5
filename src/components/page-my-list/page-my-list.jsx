import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderPageTitle from "../header-page-title/header-page-title";
import HeaderUserBlock from "../header-user-block/header-user-block";

const PageMyList = ({films}) => {
  return (
    <div className="user-page">

      <Header pageType="user-page">
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
  films: PropTypes.array.isRequired
};

export default PageMyList;
