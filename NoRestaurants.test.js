import React from "react";
import { shallow } from "enzyme";
import NoRestaurants from "../components/Restaurant/NoRestaurants";

describe("<NoRestaurants/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<NoRestaurants />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
