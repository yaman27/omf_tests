import React from "react";
import { shallow } from "enzyme";
import restaurantDetails from "../components/admin/restaurantInfo/restaurantDetails";

describe("<restaurantDetails/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<restaurantDetails />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
