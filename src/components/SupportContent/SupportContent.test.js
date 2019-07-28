import React from "react";
import SupportContent from "./SupportContent";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<SupportContent />", () => {
  let wrapper = shallow(<SupportContent />);
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
