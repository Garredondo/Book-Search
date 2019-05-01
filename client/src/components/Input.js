import React from "react";

const styles = {
    bar: {
        marginBottom: 15,
    }
}

function Input(props) {
    return (
        <div className="input-group input-group-sm" style={styles.bar}>
            <input className="form-control" type="text" {...props} placeholder="Search For a Book"/>
        </div>
    )
}

export default Input;