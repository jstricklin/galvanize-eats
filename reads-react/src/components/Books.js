import React, { Component } from 'react'
import BookCard from './BookCard'

class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: [],
        }
    }
    bookCard(book) {
        return (
            <div className="card">
                <div className="card-title">
                    <h5>{book.title}</h5>
                </div>
            </div>
            )
    }
    renderBooks() {
        return this.state.bookData.map(book => <BookCard book={book}> </BookCard>)
    }
    componentDidMount() {
        this.props.getBooks()
            .then(res => res.json())
            .then(books => this.setState({bookData: books}))
    }
    render() {
        return (
            <div>
                <div className="bg-secondary py-3">
                    <h1> BOOKS </h1>
                    <div className="container d-flex flex-wrap justify-content-between">
                        {this.renderBooks()}
                    </div>
                </div>

            </div>
            )
    }
}

export default Books;
