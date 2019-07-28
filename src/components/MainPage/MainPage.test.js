import React from "react";
import MainPage from "./MainPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<MainPage />", () => {
  let wrapper = shallow(<MainPage />);
  console.log(wrapper.debug());
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
