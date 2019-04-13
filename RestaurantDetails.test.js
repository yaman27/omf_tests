import React from "react";
import { shallow } from "enzyme";
import RestaurantDetails from "../components/Restaurant/RestaurantDetails";

describe("<RestaurantDetails/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<RestaurantDetails />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
