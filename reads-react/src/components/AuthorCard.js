import React, { Component } from 'react'
import { Link } from '@reach/router'

class AuthorCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: false,
            books: [],
        }
    }
    populateBooks = () => this.state.books.map(book => {
        let bookURL = `../../books/${book.title}`
        return <Link className="text-light mx-3" to={bookURL}>{book.title}</Link>
    })
    getBooks = () => {
        let baseURL = 'http://localhost:3000/authorbooks'
        fetch(`${baseURL}/${this.props.author.first} ${this.props.author.last}`)
            .then(res => res.json())
            .then(json => this.setState({ books: json.result }))
    }
    componentDidMount(){
        this.setState({hide: this.props.hide})
        this.getBooks()
    }
    render() {
        return (
            <div>
                <div className="card bg-primary">
                    <div className="card-title text-light d-flex align-items-center justify-content-center">
                        <h5>{this.props.author.first} {this.props.author.last}</h5>{this.props.showEdit ? <button className="btn btn-secondary edit-btn position-absolute">edit</button> : null}
                     </div>

                    <div className="d-flex card-container flex-column flex-lg-row justify-content-center align-items-center bg-secondary text-light p-3">
                        <div className="card-image my-3">
                            <img src={this.props.author.portraitURL} alt="author pic" />
                        </div>
                     {this.state.hide ? null :    <div className="card-info mx-5">
                            <p>{this.props.author.bio}</p>
                        </div>}
                    </div>
                    {this.state.hide ? null : <div className="card-body bg-secondary text-light mt-3">
                        <h5>Books</h5>
                        { this.state.books ? this.populateBooks() : null }
                    </div> }
                </div>
            </div>
            )
}
}

export default AuthorCard;
