import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<App />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
