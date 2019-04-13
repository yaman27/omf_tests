import React from "react";
import { shallow } from "enzyme";
import Landing from "../components/Layout/Landing";

describe("<Landing/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Landing />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
