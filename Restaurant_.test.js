import React from "react";
import { shallow } from "enzyme";
import Restaurant from "../components/Restaurant/Restaurant";

describe("<Restaurant/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Restaurant />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
