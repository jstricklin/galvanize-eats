import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Authors from './components/Authors'
import Books from './components/Books'
import AuthorAbout from './components/AuthorAbout'
import {Link, Router} from '@reach/router'

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
    getBooks() {
        return fetch(`${baseURL}/books`)
    }

    render() {
        return (
            <div className="App">
                <main className="container-flex bg-info d-flex flex-column justify-content-between">

                    <header className="d-flex align-items-center text-light bg-dark d-flex justify-content-between px-5"> <h1> Galvanize Reads </h1> <NavBar links={links} /> </header>

                    <Router>
                        <Home path="/" />
                        <Authors getAuthors={this.getAuthors} path="/authors" />
                        <AuthorAbout path="/authors/:name" />
                        <Books getBooks={this.getBooks} path="/books" />
                    </Router>

                    <footer className="bg-dark text-light"> test footer </footer>
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
