import React, { Component } from 'react'

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
        return this.state.bookData.map(book => <React.Fragment>{this.bookCard(book)}</React.Fragment>)
    }
    componentDidMount() {
        this.props.getBooks()
            .then(res => res.json())
            .then(books => this.setState({bookData: books}))
    }
    render() {
        return (
            <div>
                <h1> BOOKS </h1>
                <div className="bg-warning d-flex flex-wrap justify-content-around py-3">
                    <div className="container d-flex flex-wrap justify-content-between">
                            {this.renderBooks()}
                    </div>
                </div>

            </div>
            )
    }
}

export default Books;
