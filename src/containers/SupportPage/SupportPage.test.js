import React from "react";
import SupportPage from "./SupportPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

describe("<SupportPage />", () => {
  let wrapper, store, instance;
  const mockStore = configureStore();
  const initialState = [];
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<SupportPage store={store} />);
    instance = wrapper.instance();
  });
  it("should match snapshot", () => {
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should toggle the page expansion on click", () => {
    wrapper.find("show-bio-btn").simulate("click");
    const toggleExpand = jest.fn();
    expect(toggleExpand).toHaveBeenCalled();
  });
});
