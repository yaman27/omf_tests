import React from "react";
import { shallow } from "enzyme";
import Filter from "../components/Restaurant/Filter";

describe("<Filter/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Filter />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
