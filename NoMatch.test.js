import React from "react";
import { shallow } from "enzyme";
import NoMatch from "../components/NoMatch/NoMatch";

describe("<NoMatch/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<NoMatch />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
