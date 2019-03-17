import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import axios from "axios";

class Books extends Component {
    state = {
        books: [],
        title: "summer",
        authors: "jenny han",
        // description: "",
        // image: "",
        // link: ""
    }
    componentDidMount() {
        // Define API routes here
        const apikey = "AIzaSyAb78X-DLNRl9ZKIKkRMhm1uAMRSoQPdaM";
        const query = "https://www.googleapis.com/books/v1/volumes?q=" + this.state.title + "+inauthor:"
         + this.state.authors + "&key=" + apikey;


        axios.get(query).then((books) => this.setState({'books': books}));
        // adde axios call
        // this.setState() -- pass in the data from the api to you book array
    }

    render() {
        return (
           <div className="container">
                <Jumbotron>
                    <h1>Book Search</h1>
                </Jumbotron>
           </div>
        );
    }
}
export default Books;