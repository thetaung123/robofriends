import { shallow } from "enzyme";
import React from "react";
import CounterButton from "../components/CounterButton";
import { shallowToJson } from "enzyme-to-json"; // needed for new Jest version
// because we're using CRA, we don't need to install Jest // and we can run tests by entering npm test in the terminal
// we can use jest functions here
it('expect to render CounterButton component', () => {
  const mockColor = "red";
  expect(shallowToJson(shallow(<CounterButton color={mockColor} />))).toMatchSnapshot(); // this snapshot the component when the test first run, under __snapshots__ folder, so that if the component is changed the test will show error. // if you don't want that you can update the snapshot by pressing "u" key in the terminal while the test in watch mode
});

it('correctly increments counter', () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  // find the element with id and simulate a click event
  wrapper.find("[id='counter']").simulate("click");
  // find the state of the wrapper
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual("red");
});
