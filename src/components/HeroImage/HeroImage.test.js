import React from "react";
import HeroImage from "./HeroImage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<HeroImage />", () => {
  let wrapper = shallow(<HeroImage />);
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
