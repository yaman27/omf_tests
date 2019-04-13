import React from "react";
import { shallow } from "enzyme";
import userfunction from "../components/userfunction";

describe("<userfunction/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<userfunction />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
