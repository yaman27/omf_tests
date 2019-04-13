import React from "react";
import { shallow } from "enzyme";
import restaurant from "../components/Auth/restaurant";

describe("<restaurant/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<restaurant />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
