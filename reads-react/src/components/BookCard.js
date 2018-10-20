import React, { Component } from 'react'
import { Link } from '@reach/router'


class BookCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: false,
            authors: [],
        }
    }
    getAuthors = () => {
        let baseURL = 'http://localhost:3000/bookauthors'
        fetch(`${baseURL}/${this.props.book.title}`)
            .then(res => res.json())
            .then(json => this.setState({ authors: json.result }))
    }
    populateAuthors = () => this.state.authors.map(author => {
        let authorURL = `../../authors/${author.first} ${author.last}`
        return <Link className="text-light mx-3" to={authorURL}>{author.first} {author.last}</Link>
        })
    componentDidMount(){
        this.setState({ hide: this.props.hide })
        this.getAuthors()
    }
    render() {
        return (
            <div>
                <div className="card bg-primary">
                    <div className="card-title text-light">
                        <h5>{this.props.book.title}</h5>
                    </div>
                    <div className="d-flex author-container align-items-center bg-secondary text-light p-3">
                        <div className="card-image">
                            <img src={this.props.book.coverURL} alt="author pic" />
                        </div>
                        <div className="author-bio mx-5">
                            <p>{this.props.book.description}</p>
                        </div>
                    </div>
                    {this.props.hide ? null :
                            <section className="card-body bg-secondary mt-3 text-light">
                        <h5>Authors</h5>
                        { this.state.authors ? this.populateAuthors() : null }
                    </section>
                    }
                </div>
            </div>
            )
}
}

export default BookCard;
