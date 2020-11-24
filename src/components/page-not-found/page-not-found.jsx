import React from "react";
import {PageType} from "../../constants";
import Header from "../header/header";
import Footer from "../footer/footer";

const PageNotFound = () => {
  return (
    <div className="user-page">
      <Header pageType={PageType.USER_PAGE} />

      <div className="sign-in user-page__content">
        <div className="sign-in__message">
          <p>Sorry! The page, you are looking for doesn&apos;t exist! :(</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PageNotFound;
