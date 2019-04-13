import React from "react";
import { shallow } from "enzyme";
import ResCuisineChart from "../components/view-reports/charts/ResCuisineChart";

describe("<ResCuisineChart/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<ResCuisineChart />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
