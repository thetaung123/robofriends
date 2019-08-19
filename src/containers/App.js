import React,{Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
//containers are somethings that has state in them// not pure functions
class App extends Component {//need to use class in order to be able to use constructor and state
    constructor(){ // part of react don't need to use arrow functions
        super();
        this.state = {//state is something that's not static // something that's changing //unlike props
            robots : [],
            searchField : ''
        };
        //console.log('constructor')
    }
    componentDidMount() { // part of react don't need to use arrow functions //constructor(), render(), and componentDidMount() are part of what's called react life hooks //google!//
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users})); //part of next sections //instead of using robots file// we use web API's users array
        //console.log('componentDidMount')
    }

    onSearchChange = event => { //need to use arrow function to make sure that 'this' means App, not input field // if we don't use arrow function ,this will mean input filed because onSearchChange function is running on the input field// so we need to make sure we use arrow function;Otherwise, we'll get an error
        // console.log(event.target.value); //logging input value
        this.setState({searchField: event.target.value}); // if we want to change state we do this. //notice? it's an object
    };
    render() {
        const {robots,searchField}=this.state;//destructuring
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); //toLowerCase is used so that if input is in uppercase it doesn't make any different
        });
        //console.log('render');
        return !robots.length ? //in case the API server's slow //adding Loading header //using instead of robots.length===0
             (<h1>Loading</h1>): //using ternary operator instead of if else
             (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    };
}
export default App;