import React from "react";
import { shallow } from "enzyme";
import Login from "../components/Auth/Login";

describe("<Login/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Login />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
