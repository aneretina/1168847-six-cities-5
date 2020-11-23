
import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from "./login";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "../../store/reducers/root/root-reducer";
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

const store = createStore(rootReducer);

it(`Submit event should call a callback`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login
            onSubmit={onSubmit}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`input[type="email"]`).instance().value = `max@gmail.com`;
  wrapper.find(`input[type="password"]`).instance().value = `123456`;

  const form = wrapper.find(`form`);

  form.simulate(`submit`, {preventDefault: () => {}});
  expect(onSubmit).toHaveBeenCalledWith({
    login: `max@gmail.com`,
    password: `123456`,
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
