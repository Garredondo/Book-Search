import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/Title";
import Input from "./components/Input";
import API from "./utils/API";

class App extends Component {

  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  }


  render () {
    return (
      // <Router>
        <div>
          <Title /> 
          <div className="row">
            <div className="col-sm-12">
              <Input 
                name="bookSearch"
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-primary"
                onClick={this.handleFormSubmit}
              >Search Books</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <h3>Results</h3>
              <p>This is where I want all the books to show</p>
            </div>
  
            <div className="col-sm-4">
              <h3>Saved Books</h3>
              <p>This is where I want all the saved books to show</p>
            </div>
          </div>
          
  
        </div>
      // </Router>
    );
  }

}


export default App;
