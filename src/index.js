import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createApi} from "./services/api";
import {Provider} from 'react-redux';
import App from "./components/app/app";
import {composeWithDevTools} from 'redux-devtools-extension';
import {fetchOffersList, checkAuth} from "./store/api-actions";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {redirect} from './store/middlewares/redirect';
import rootReducer from "./store/reducers/root/root-reducer";
import "leaflet/dist/leaflet.css";

const api = createApi(() => store.dispatch(requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED)));


const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

Promise.all([
  store.dispatch(fetchOffersList()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
