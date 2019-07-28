import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<App />", () => {
  let wrapper = shallow(<App />);
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
