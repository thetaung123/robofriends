import React from 'react';

const Card = (props) => {
    const {id,name,email} = props; //destructuring
    //you have to wrap every javascript syntax with curly brackets
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
            <div>{name}</div>
            <p>{email}</p>
        </div>
    );
};
export default Card;
