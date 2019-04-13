import React from "react";
import { shallow } from "enzyme";
import AddMenu from "../components/add-credentials/AddMenu";

describe("<AddMenu/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<AddMenu />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
