import React from "react";
import SupportPage from "./SupportPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

describe("<SupportPage />", () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = [];
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<SupportPage store={store} />);
  });
  it("should match snapshot", () => {
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
