import React from "react";
import { shallow } from "enzyme";
import detail from "../components/orderDetails/detail";

describe("<detail/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<detail />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
