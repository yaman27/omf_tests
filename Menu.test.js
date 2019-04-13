import React from "react";
import { shallow } from "enzyme";
import Menu from "../components/dashboard/Menu";

describe("<Menu/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Menu />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
