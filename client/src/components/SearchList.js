import React from "react";

function SearchList({children}) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export default SearchList;