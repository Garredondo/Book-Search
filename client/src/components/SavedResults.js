import React from "react";

const styles = {
    img: {
        maxWidth: 80,
        alignContent: "center"
    },
    container: {
        padding: 10
    }
}


function SavedResults(props) {
    return (
        <div style={styles.container}>
            
            <div className="row" key={props.key}>
                <div className="col-sm-12">
                    <img src={props.image} alt={props.title} style={styles.img}/>
                    <h2>{props.title}</h2>
                </div>
                <div className="col-sm-12">
                    <h6>By: {props.authors}</h6>
                    <h6>About Book:</h6>
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
};


export default SavedResults;