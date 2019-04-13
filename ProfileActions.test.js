import React from "react";
import { shallow } from "enzyme";
import ProfileActions from "../components/dashboard/ProfileActions";

describe("<ProfileActions/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<ProfileActions />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
