import React,{Component} from 'react';

class Hello extends Component{
    render() { //render expects only one line of return,so , we need to wrap everything in the brackets
        return ( //can't used class because this isn't exactly html// this is JFX
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>{this.props.greetings}</p>
            </div>

        );// calling the props greetings
    }
} //the class above is just a function// if you write it as a function,like below, it still works

// const Hello = (props) => {
//     return(
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>{props.greetings}</p>
//         </div>
//     );
// };
export default Hello;