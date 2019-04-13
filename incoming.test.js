import React from "react";
import { shallow } from "enzyme";
import incoming from "../components/create-profile/incoming";

describe("<incoming/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<incoming />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
