import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/Layout/Footer";

describe("<Footer/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Footer />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
