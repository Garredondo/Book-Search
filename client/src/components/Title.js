import React from "react";

const styles = {
    heading: {
        backgroundColor: "#4185f4"
    },
    header: {
        color: "white"
    }
}

function Title(){
    return (
        <div>
            <div className="jumbotron" style={styles.heading}>
                <h1 style={styles.header}>Google Book Search</h1>
            </div>
        </div>
    )
};

export default Title;