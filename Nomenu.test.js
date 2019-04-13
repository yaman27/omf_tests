import React from "react";
import { shallow } from "enzyme";
import Nomenu from "../components/Restaurant/Nomenu";

describe("<Nomenu/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Nomenu />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
