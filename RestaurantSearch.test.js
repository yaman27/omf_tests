import React from "react";
import { shallow } from "enzyme";
import RestaurantSearch from "../components/Restaurant/RestaurantSearch";

describe("<RestaurantSearch/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<RestaurantSearch />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
