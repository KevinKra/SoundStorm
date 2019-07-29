import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

describe("<Header />", () => {
  let wrapper;
  let store;
  const mockStore = configureStore();
  const initialState = [];
  const mockUpdatePrimaryTrack = jest.fn();
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Header store={store} />);
  });
  it("should match snapshot", () => {
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  xit("should call the updatePrimaryTrack function when button is clicked", () => {
    wrapper.find("button").simulate("click");
    expect(mockUpdatePrimaryTrack).toHaveBeenCalled();
  });
});
