import React from "react";
import { shallow } from "enzyme";
import cart from "../components/cart/cart";

describe("<cart/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<cart />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
