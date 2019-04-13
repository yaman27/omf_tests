import React from "react";
import { shallow } from "enzyme";
import view_reports from "../components/admin/reports/view_reports";

describe("<view_reports/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<view_reports />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
