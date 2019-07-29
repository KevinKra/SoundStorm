import React from "react";
import { PrimaryTracks } from "./PrimaryTracks";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<PrimaryTracks />", () => {
  let wrapper = shallow(<PrimaryTracks />);
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
