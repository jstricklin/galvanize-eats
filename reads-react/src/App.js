import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Authors from './components/Authors'
import Books from './components/Books'
import AuthorAbout from './components/AuthorAbout'
import {Link, Router} from '@reach/router'
import BookAbout from './components/BookAbout'

const baseURL = 'http://localhost:3000'
const links = ["Authors", "Books"]

class App extends Component {
    constructor(){
        super()
        this.state = {
            authors: [],
            books: [],
        }
    }
    getAuthors() {
        return fetch(`${baseURL}/authors`)
    }
    getAuthor(name){
        return fetch(`${baseURL}/authors/${name}`)
    }
    getBooks() {
        return fetch(`${baseURL}/books`)
    }
    getBook(title) {
        return fetch(`${baseURL}/books/${title}`)
    }

    render() {
        return (
            <div className="App">
                <main className="container-flex bg-secondary d-flex flex-column justify-content-between">
                    <div className="navbar text-light bg-primary px-5"> <div className="col-sm-10 d-flex space-between"> <h1> Galvanize Reads </h1> <NavBar links={links} /> </div> </div>

                    <Router>
                        <Home path="/" />
                        <Authors getAuthors={this.getAuthors} path="/authors" />
                        <AuthorAbout getAuthor={this.getAuthor} path="/authors/:name" />
                        <Books getBooks={this.getBooks} path="/books" />
                        <BookAbout getBook={this.getBook} path="/books/:title" />
                    </Router>

                    <footer className="bg-primary text-light text-left">
                        <div className="col-sm-10">
                            Galvanize g95 2018
                        </div>
                    </footer>
                </main>

            </div>
            );
}
}

const Home = () => {
    return (
        <div>Welcome!</div>
        )
}

export default App;
