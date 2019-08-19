import React from 'react';
const Scroll = (props) => { //scroll is wrapped around other elements//it's different
    console.log(props); //you get object. If we look inside the object, you'll see cardList
    return (//adding css scrollable attribute // can do it inside css file
        <div style={{overflowY:'scroll', border: '1px solid black',height:'500px'}}>
            {props.children}
        </div>
    );//rendering its children:Cardlist
    //return <h1>Hi</h1>; //eg <<
};
export default Scroll;
