import React from "react";
import { shallow } from "enzyme";
import MenuSearch from "../components/Restaurant/MenuSearch";

describe("<MenuSearch/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<MenuSearch />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
