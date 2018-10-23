import React, { PureComponent } from 'react'
import { Link } from '@reach/router'
import AuthorCard from './AuthorCard'
import BookCard from './BookCard'
const baseURL = 'http://localhost:3000/search'

class Search extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchString: "",
            authorResults: [],
            bookResults: [],
        }
    }
    startSearch = () => {

        fetch(`${baseURL}/${this.props.terms}`, {"content-type": 'application/json'})
            .then(res => res.json())
            .then(res => this.setState({authorResults: res.authors, bookResults: res.books}))

    }
    componentDidMount(){
        this.setState({searchString: this.props.terms})
        this.startSearch()
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.terms !== this.props.terms){
            this.setState({searchString: this.props.terms})
            this.startSearch()
        }
    }
    renderAuthors() {
        return this.state.authorResults.map(author =>{
            let authorURL = `../../authors/${author.first} ${author.last}`
            return <Link to={authorURL} ><AuthorCard hide={true} author={author} /></Link>
            })
    }
    renderBooks() {
        return this.state.bookResults.map(book => {
            let bookURL = `../../books/${book.title}`
            return <Link to={bookURL}><BookCard hide={true} getBook={this.props.getBook} book={book} /></Link>
            })
}
    render() {
        return (
                <div className="mx-auto pt-3 d-flex flex-column">
                <p><span className="bold">{this.state.authorResults.length + this.state.bookResults.length}</span> results for: "<span className="bold">{this.state.searchString}</span>"</p>
                <section className="d-flex mx-auto flex-wrap">
                    <div>{this.state.authorResults.length > 0 ? <h3>Author Results</h3> : null }
                        {this.renderAuthors()}</div>
                    <div>{this.state.bookResults.length > 0 ? <h3>Book Results</h3> : null }
                        {this.renderBooks()}</div>
                </section>
            </div>
        )
    }
}

export default Search;
