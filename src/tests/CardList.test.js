import { shallow } from "enzyme";
import React from "react";
import CardList from "../components/CardList";
import { shallowToJson } from "enzyme-to-json"; // needed for new Jest version
// because we're using CRA, we don't need to install Jest // and we can run tests by entering npm test in the terminal
// we can use jest functions here
it('expect to render cardlist component', () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "snowwhite",
      email: "john.s@gmail.com"
    }
  ]
  expect(shallowToJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot(); // this snapshot the component when the test first run, under __snapshots__ folder, so that if the component is changed the test will show error. // if you don't want that you can update the snapshot by pressing "u" key in the terminal while the test in watch mode
});
