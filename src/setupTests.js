import { configure } from "enzyme"; // we only need to do this for react 16 and higher
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });