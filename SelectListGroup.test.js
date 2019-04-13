import React from "react";
import { shallow } from "enzyme";
import SelectListGroup from "../components/common/SelectListGroup";

describe("<SelectListGroup/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<SelectListGroup />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
