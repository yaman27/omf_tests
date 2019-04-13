import React from "react";
import { shallow } from "enzyme";
import TextFieldGroup from "../components/common/TextFieldGroup";

describe("<TextFieldGroup/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<TextFieldGroup />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
