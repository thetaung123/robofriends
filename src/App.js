import React,{Component} from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import {robots} from "./robots";

class App extends Component {
    constructor(){
        super();
        this.state = {//state is something that's not static // something that's changing //unlike props
            robots : robots,
            searchField : ""
        }
    }
    onSearchChange = event => {
        // console.log(event.target.value); //logging input value
        this.setState({searchField: event.target.value}); // if we want to change state we do this. //notice? it's an object
    };
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); //toLowerCase is used so that if input is in uppercase it doesn't make any different
        });
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    };
}
export default App;