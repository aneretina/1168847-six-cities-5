import React from "react";
import MainPage from "./main-page/main-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {placesCount} = props;

  return (
    <MainPage placesCount={placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
