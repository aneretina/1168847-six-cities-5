import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const Settings = {
  PLACES_COUNT: 320
};

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offers= {offers}
    />,
    document.querySelector(`#root`)
);
