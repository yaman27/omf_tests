import React from "react";
import { shallow } from "enzyme";
import RestaurantList from "../components/Restaurant/RestaurantList";

describe("<RestaurantList/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<RestaurantList />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
