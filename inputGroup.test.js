import React from "react";
import { shallow } from "enzyme";
import InputGroup from "../components/common/InputGroup";

describe("<InputGroup/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<InputGroup />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
