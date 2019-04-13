import React from "react";
import { shallow } from "enzyme";
import ResTypeChart from "../components/view-reports/charts/ResTypeChart";

describe("<ResTypeChart/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<ResTypeChart />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
