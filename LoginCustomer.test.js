import React from "react";
import { shallow } from "enzyme";
import LoginCustomer from "../components/Auth/LoginCustomer";

describe("<LoginCustomer/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<LoginCustomer />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
