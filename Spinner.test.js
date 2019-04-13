import React from "react";
import { shallow } from "enzyme";
import Spinner from "../components/common/Spinner";

describe("<Spinner/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<Spinner />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
