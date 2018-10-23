import React, { Component } from 'react'
import { Link } from '@reach/router'


class BookCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: false,
            authors: [],
            title: [],
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
        this.setState({title: this.props.book.title.split(':')})
    }
    render() {
        return (
            <div>
                <div className="card bg-primary">
                    <div className="card-title text-light">
                    {this.props.showEdit ? <button className="btn btn-secondary edit-btn position-absolute">edit</button> : null}
                        <h5>{this.state.title[0]}</h5>
                        <p>{this.state.title[1]} </p>
                    </div>
                    <div className="d-flex card-container justify-content-center flex-column flex-lg-row align-items-center bg-secondary text-light p-3">
                        <div className="card-image my-3">
                            <img src={this.props.book.coverURL} alt="book pic" />
                        </div>
                        {this.state.hide ? null : <div className="card-info mx-5">
                            <p>{this.props.book.description}</p>
                        </div>}
                    </div>
                    {this.props.hide ? null : <section className="card-body bg-secondary mt-3 text-light">
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
