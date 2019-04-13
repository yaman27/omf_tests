import React from "react";
import { shallow } from "enzyme";
import RestaurantMenu from "../components/Restaurant/RestaurantMenu";

describe("<RestaurantMenu/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<RestaurantMenu />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
