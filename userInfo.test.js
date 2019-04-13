import React from "react";
import { shallow } from "enzyme";
import userInfo from "../components/admin/userInfo/userInfo";

describe("<userInfo/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<userInfo />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
