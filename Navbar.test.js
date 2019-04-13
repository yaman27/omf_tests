import React from "react";
import { shallow } from "enzyme";
import Navbar from "../components/Layout/Navbar";

describe("<Navbar/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Navbar />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
