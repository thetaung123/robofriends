import React from 'react';

const SearchBox = ({searchField,searchChange}) => {//calling the searchChange property //search is ,in turn,also a function(this.onSearchChange),
    return (                                       //so whenever onChange occurs in the input, searchChange function got called
        <div className="pa2">
            <input
                aria-label="search robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );

};
export default SearchBox;