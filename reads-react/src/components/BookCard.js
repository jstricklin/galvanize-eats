import React, { Component } from 'react'
import { Link } from '@reach/router'

class BookCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: true,

        }
    }
    render() {
        return (
            <div>
                <Link className="card bg-primary" to={this.props.book.title} >
                    <div className="card-title text-light">
                        <h5>{this.props.book.title}</h5>
                    </div>
                    <div className="d-flex author-container align-items-center bg-light text-dark p-3">
                        <div className="card-image">
                            <img src={this.props.book.coverURL} alt="author pic" />
                        </div>
                        <div className="author-bio mx-5">
                            <p>{this.props.book.description}</p>
                        </div>
                    </div>
                </Link>
            </div>
            )
    }
}

export default BookCard;
