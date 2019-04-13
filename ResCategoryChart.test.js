import React from "react";
import { shallow } from "enzyme";
import ResCategoryChart from "../components/view-reports/charts/ResCategoryChart";

describe("<ResCategoryChart/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<ResCategoryChart />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
