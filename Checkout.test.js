import React from "react";
import { shallow } from "enzyme";
import Checkout from "../components/cart/Checkout";

describe("<Checkout/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Checkout />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
