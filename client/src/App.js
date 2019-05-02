import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/Title";
import Input from "./components/Input";
import API from "./utils/API";
import SearchList from "./components/SearchList";

class App extends Component {

  state = {
    books: [],
    bookSearch: "",
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
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
      // this commented out code will allow me to see the res.data in the console
      .then(res => console.log({ books: res.data}))
      .then(res => this.setState({ books: res.data.books.items.volumeInfo, title: "", author: "", description: "", image: "", link: ""}),
      console.log(this.state.books)
      )
      .catch(err => console.log(err));
  }

  // loadSavedBooks = () => {
  //   API.getSavedBooks()
  //   .then(res => 
  //     this.setState({books: res.data}))
  // }

  deleteBook = id => {
    API.deleteBook(id)
    .then(res => this.loadSavedBooks())
    .catch(err => console.log(err));
  };


  render() {
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
            {/* {this.state.books.length ? ( */}
              <SearchList>
                {this.state.books.map(book => book)}
                <p>This is where I want all the books to show</p>
              </SearchList>
            {/* ) : (
              <h3>Sorry, No Results Found.</h3>
            )} */}

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
