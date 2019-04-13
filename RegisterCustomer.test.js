import React from "react";
import { shallow } from "enzyme";
import RegisterCustomer from "../components/Auth/RegisterCustomer";

describe("<RegisterCustomer/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<RegisterCustomer />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
