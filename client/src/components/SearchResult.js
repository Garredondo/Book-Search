import React from "react";

const styles = {
    img: {
        maxWidth: 150,
        alignContent: "center"
    },
    container: {
        padding: 10
    }
}


function SearchResult(props) {
    return (
        <div style={styles.container}>
            
            <div className="row" key={props.key}>
                <div className="col-sm-3">
                    <img src={props.image} alt={props.title} style={styles.img}/>
                </div>
                <div className="col-sm-9">
                    <h2>{props.title}</h2>
                    <h6>By: {props.authors}</h6>
                    <h6>About Book:</h6>
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">Visit Google Books</a>
                </div>
            </div>

        </div>
    )
};


export default SearchResult;