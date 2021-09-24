import React from 'react';
import Card from "./Card";

const CardList = ({robots}) => { //calling props from app
    return (
          <div>
            {
                robots &&
                robots.map((users,i)=>{
                return (<Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />); //to avoid errors if one of the items in the array , we need to add key props whenever we loop an array
                })
            }
        </div>
    );
};          // find out more about it by deleting key props and reading the error in the console // key props should be a number that doesn't change like id

export default CardList;
