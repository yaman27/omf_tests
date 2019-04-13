import React from "react";
import { shallow } from "enzyme";
import isAuthenticated from "../components/Layout/isAuthenticated";

describe("<isAuthenticated/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<isAuthenticated />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
