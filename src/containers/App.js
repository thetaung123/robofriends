import React,{Component} from 'react';
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";
import {requestRobots, setSearchField} from "../store/actions";

//containers are somethings that has state in them// not pure functions
class App extends Component {//need to use class in order to be able to use constructor and state
    // constructor(){ // part of react don't need to use arrow functions
    //     super();
    //     this.state = {//state is something that's not static // something that's changing //unlike props
    //         robots : [],
    //     };
    //     //console.log('constructor')
    // }
    componentDidMount() { // part of react don't need to use arrow functions //constructor(), render(), and componentDidMount() are part of what's called react life hooks //google!//
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots:users})); //part of next sections //instead of using robots file// we use web API's users array
        // //console.log('componentDidMount')

      this.props.onRequestRobots()
    }

    // onSearchChange = event => { //need to use arrow function to make sure that 'this' means App, not input field // if we don't use arrow function ,this will mean input filed because onSearchChange function is running on the input field// so we need to make sure we use arrow function;Otherwise, we'll get an error
    //     // console.log(event.target.value); //logging input value
    //     this.setState({searchField: event.target.value}); // if we want to change state we do this. //notice? it's an object
    // };
    render() {
     // const {robots}=this.state;//destructuring
      const {searchField, robots, isPending, onSearchChange} = this.props
      const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); //toLowerCase is used so that if input is in uppercase it doesn't make any different
        });
      return isPending ? //in case the API server's slow //adding Loading header //using instead of robots.length===0
           (<h1>Loading</h1>): //using ternary operator instead of if else
           (
              <div className="tc">
                  <h1 className="f1">RoboFriends</h1>
                  <SearchBox searchChange={onSearchChange}/>
                  <Scroll>
                    <ErrorBoundary>
                      <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                  </Scroll>
              </div>
          );
    };
}

const mapStateToProps = state => ({
  searchField: state.searchField.searchField,
  robots: state.robots.robots,
  isRobotsReqPending: state.robots.isPending,
  robotsReqError: state.robots.error
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()), //thunks intercepts if dispatched action is returning a function other than an object
})
export default connect(mapStateToProps, mapDispatchToProps)(App);