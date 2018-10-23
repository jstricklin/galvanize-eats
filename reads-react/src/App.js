import React, { Component } from 'react';
import logo from './assets/g-logo.png';
import './App.css';
import NavBar from './components/NavBar'
import Authors from './components/Authors'
import Books from './components/Books'
import AuthorAbout from './components/AuthorAbout'
import {Link, Router, navigate} from '@reach/router'
import BookAbout from './components/BookAbout'
import Search from './components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const baseURL = 'http://localhost:3000'
const links = ["Authors", "Books"]

class App extends Component {
    constructor(){
        super()
        this.state = {
            authors: [],
            books: [],
            search: '',
            searchResults: [],
            showEdit: false,
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.startSearch = this.startSearch.bind(this)
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
    startSearch(e){
        e.preventDefault()
        e.target.reset()
        navigate(`/search/${this.state.search}`)
    }
    toggleEdit() {
        this.setState({showEdit: !this.state.showEdit})
    }
    render() {
        return (
            <div className="App">
                <main className="container-flex bg-secondary d-flex flex-column">
                    <header className="main-header d-flex align-items-center text-light bg-primary"> <div className="col-sm-10 mx-auto d-flex justify-content-between align-items-center"><div onClick={this.toggleEdit} className="logo d-flex align-items-center"> <i class="fa fa-search" aria-hidden="true"></i> <img src={logo} /> <Link className="text-light" to="/"><h1> Reads </h1></Link></div> <NavBar links={links} /><div className="my-auto d-flex"><form onSubmit={this.startSearch}><input onChange={(e)=>this.setState({search: e.target.value})} type="text" /><button className="btn ml-3"><FontAwesomeIcon icon="search" /></button></form></div></div> </header>

                    <section className="col-sm-8 mx-auto">
                    <Router>
                        <Home path="/" />
                        <Search termString={this.state.search} path="/search/:terms" />
                        <Authors getAuthors={this.getAuthors} showEdit={this.state.showEdit} path="/authors" />
                        <AuthorAbout showEdit={this.state.showEdit} getAuthor={this.getAuthor} path="/authors/:name" />
                        <Books showEdit={this.state.showEdit} getBooks={this.getBooks} path="/books" />
                        <BookAbout showEdit={this.state.showEdit} getBook={this.getBook} path="/books/:title" />
                    </Router>
                </section>

                    <footer className="bg-primary text-light text-left">
                        <div className="col-sm-10 mx-auto">
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
