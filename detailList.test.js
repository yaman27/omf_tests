import React from "react";
import { shallow } from "enzyme";
import detailList from "../components/orderDetails/detailList";

describe("<detailList/>", () => {
  it("should render", () => {
    const Wrapper = shallow(<detailList />);
    // console.log(Wrapper.debug());
    expect(Wrapper).toMatchSnapshot();
  });
});
