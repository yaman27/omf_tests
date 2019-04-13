import React from "react";
import { shallow } from "enzyme";
import adminLanding from "../components/admin/adminLanding";

describe("<adminLanding/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<adminLanding />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
