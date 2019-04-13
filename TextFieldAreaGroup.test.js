import React from "react";
import { shallow } from "enzyme";
import TextFieldAreaGroup from "../components/common/TextFieldAreaGroup";

describe("<TextFieldAreaGroup/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<TextFieldAreaGroup />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
