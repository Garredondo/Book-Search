import React, { Component } from 'react';
import Title from "./components/Title";
import Input from "./components/Input";
import API from "./utils/API";
import SearchResult from "./components/SearchResult";


const styles = {
  button: {
    marginBottom: 15
  },
  container: {
    padding: 10
  }
}

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

  componentDidMount() {
    this.searchBooks("The Secret History");
  }

  searchBooks = query => {
    API.getBooks(query)
      .then(res => {
        this.setState({
          books: res.data.items
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.bookSearch);
  }

  handleSave(){
    API.saveBook()
    .then(res => this.loadSavedBooks())
    .catch(err => console.log(err));
  };

  // loadSavedBooks = () => {
  //   API.getSavedBooks()
  //   .then(res => 
  //     this.setState({books: res.data}))
  // }

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadSavedBooks())
  //     .catch(err => console.log(err));
  // };


  render() {
    return (

      <div style={styles.container}>
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
              style={styles.button}
            >Search Books</button>
          </div>
        </div>


        <div className="row">
          <div className="col-sm-8">
            <h3>Search Results</h3>
            {this.state.books.map(book => {
              return (
                <div>
                  <SearchResult
                    key={this.state._id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    link={book.volumeInfo.previewLink}
                  />
                  <button className="btn btn-danger" 
                  style={styles.button} onClick={this.handleSave}>Save</button> 
                </div>
              )
            })}
          </div>

          <div className="col-sm-4">
            <h3>Saved Books</h3>
            <p>This is where I want all the saved books to show</p>
          </div>
        </div>


      </div>

    );
  }

}


export default App;
