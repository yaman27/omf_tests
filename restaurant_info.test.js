import React from "react";
import { shallow } from "enzyme";
import restaurantInfo from "../components/admin/restaurantInfo/restaurantInfo";

describe("<restaurantInfo/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<restaurantInfo />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
