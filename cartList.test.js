import React from "react";
import { shallow } from "enzyme";
import CartList from "../components/cart/CartList";

describe("<CartList/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<CartList />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
