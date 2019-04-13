import React from "react";
import { shallow } from "enzyme";
import Register from "../components/Auth/Register";

describe("<Register/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Register />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
