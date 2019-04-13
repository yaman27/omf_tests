import React from "react";
import { shallow } from "enzyme";
import CreateProfile from "../components/create-profile/CreateProfile";

describe("<CreateProfile/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<CreateProfile />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
