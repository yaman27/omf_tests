import React from "react";
import { shallow } from "enzyme";
import RestaurantLanding from "../components/Restaurant/RestaurantLanding";

describe("<RestaurantLanding/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<RestaurantLanding />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
