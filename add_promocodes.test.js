import React from "react";
import { shallow } from "enzyme";
import add_promocodes from "../components/admin/promocodes/add_promocodes";

describe("<add_promocodes/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<add_promocodes />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
