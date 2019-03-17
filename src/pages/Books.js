import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import { List, ListItem } from "../components/list";
import axios from "axios";

class Books extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
    };
    
    componentDidMount() {
    };

    findBooks = () => {
        // Define API routes here
        const apikey = "AIzaSyAb78X-DLNRl9ZKIKkRMhm1uAMRSoQPdaM";
        const query = "https://www.googleapis.com/books/v1/volumes?q=" + this.state.title + "+inauthor:"
         + this.state.authors + "&key=" + apikey;


        // axios.get(query).then((books) => this.setState({books: books.data.items})
        
        // );
        axios.get(query).then((books) => {
            console.log(books.data.items)
            return this.setState({books: books.data.items})
        });
       
        // adde axios call
        // this.setState() -- pass in the data from the api to you book array
    }

    saveBook = () => {
        //axios.post? with path to mongodb
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        // this.setState({ title: this.state.title, authors: this.state.authors });
        // console.log(this.state.title);
        this.findBooks();
    }

    render() {
        return (
           <div className="container">
                <Jumbotron>
                    <h1>Book Search</h1>
                </Jumbotron>
                <form className="form-group">
                    <input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <input
                        value={this.state.authors}
                        onChange={this.handleInputChange}
                        name="authors"
                        placeholder="Authors (required)"
                    />
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Find Books</button>
                </form>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem key = {book.id}>
                                <p>{book.volumeInfo.title}</p>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                                <button type="submit" className="btn btn-dark" onClick={this.saveBook}>Save Book</button>
                            </ListItem>
                        ))}
                    </List>
                ):
                <h1>No books to display</h1>
                }

           </div>
        );
    }
}
export default Books;