import React from "react";
import { shallow } from "enzyme";
import userDetails from "../components/admin/userInfo/userDetails";

describe("<userDetails/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<userDetails />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
