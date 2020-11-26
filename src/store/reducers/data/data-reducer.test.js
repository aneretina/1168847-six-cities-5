import {loadData} from "./data-reducer";
import {ActionType} from "../../action";
import {offersMock} from "../../../mocks/offers";


describe(`Data Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(loadData(void 0, {})).toEqual({
      offers: []
    });
  });

  it(`Reducer updates offers by load offers`, () => {
    expect(loadData({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersMock,
    })).toEqual({
      offers: offersMock,
    });
  });
});


