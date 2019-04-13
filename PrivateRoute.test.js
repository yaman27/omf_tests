import React from "react";
import { shallow } from "enzyme";
import PrivateRoute from "../components/common/PrivateRoute";

describe("<PrivateRoute/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<PrivateRoute />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
