import React from "react";
import { shallow } from "enzyme";
import EditProfile from "../components/edit-profile/EditProfile";

describe("<EditProfile/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<EditProfile />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
