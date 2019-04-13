import React from "react";
import { shallow } from "enzyme";
import searchbar from "../components/admin/restaurantInfo/searchbar";

describe("<searchbar/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<searchbar />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
