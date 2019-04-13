import React from "react";
import { shallow } from "enzyme";
import ViewReports from "../components/view-reports/charts/ViewReports";

describe("<ViewReports/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<ViewReports />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
