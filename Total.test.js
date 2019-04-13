import React from "react";
import { shallow } from "enzyme";
import Total from "../components/cart/Total";

describe("<Total/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Total />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
