import React from "react";
import { shallow } from "enzyme";
import manage_promocodes from "../components/admin/promocodes/manage_promocodes";

describe("<manage_promocodes/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<manage_promocodes />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
