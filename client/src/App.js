import React, { Component } from 'react';
import Title from "./components/Title";
import Input from "./components/Input";
import API from "./utils/API";
import SearchResult from "./components/SearchResult";
import SavedResults from "./components/SavedResults";


const styles = {
  button: {
    marginBottom: 15
  },
  container: {
    padding: 10
  },
  savButton: {
    padding: 10
  }
}

class App extends Component {

  state = {
    books: [],
    bookSearch: "",
    SavedBooks: []
  };

  componentDidMount() {
    this.searchBooks("The Secret History");
    this.loadSavedBooks();
  }

  searchBooks = query => {
    API.getBooks(query)
      .then(res => {
        this.setState({
          books: res.data.items
        });
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

  handleSave = book => {
    const savedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.previewLink
    };
    API.saveBook(savedBook)
    .then(res => this.loadSavedBooks())
    .catch(err => console.log(err));
  };

  loadSavedBooks = () => {
    API.getSavedBooks()
    .then(res => 
      this.setState({SavedBooks: res.data}))
  }

  deleteBook = id => {
    console.log(id);
    API.deleteBook(id)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };


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
                  style={styles.button} 
                  onClick={()=>{this.handleSave(book)}} 
                  >Save</button> 
                </div>
              )
            })}
          </div>

          <div className="col-sm-4">
            <h3>Saved Books</h3>
            {this.state.SavedBooks.map(SavedBook => {
              return (
                <div>
                  <SavedResults
                    key={SavedBook._id}
                    title={SavedBook.title}
                    authors={SavedBook.authors[0]}
                    description={SavedBook.description}
                    image={SavedBook.image}
                    link={SavedBook.link}
                  />
                  <button className="btn btn-danger" 
                  style={styles.savButton} 
                  onClick={()=>{this.deleteBook(SavedBook.key)}} 
                  >Delete</button> 
                </div>
              )
            })}
           
          </div>
        </div>


      </div>

    );
  }

}


export default App;
