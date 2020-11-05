import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createApi} from "./services/api";
import {Provider} from 'react-redux';
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {composeWithDevTools} from 'redux-devtools-extension';
import {fetchOffersList} from "./store/api-actions";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import rootReducer from "./store/reducers/root-reducer";

const api = createApi(() => store.dispatch(requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED)));


const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument(api))
    ));

store.dispatch(fetchOffersList());


ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
