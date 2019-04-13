import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../components/dashboard/Dashboard";

describe("<Dashboard/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Dashboard />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
