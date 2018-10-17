import React, { Component } from 'react'
import { Link } from '@reach/router'

class AuthorCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: true,

        }
    }
    render() {
        // let authorURL = `${this.props.author.first} ${this.props.author.last}`
        return (
            <div>
                <div className="card bg-primary">
                    <div className="card-title text-light">
                        <h5>{this.props.author.first} {this.props.author.last}</h5>
                    </div>
                    <div className="d-flex author-container align-items-center bg-secondary text-light p-3">
                        <div className="card-image">
                            <img src={this.props.author.portraitURL} alt="author pic" />
                        </div>
                        <div className="author-bio mx-5">
                            <p>{this.props.author.bio}</p>
                        </div>
                    </div>
                    {this.state.hide ? null : <div className="card-body">
                        <p>{this.props.author.bio}</p>
                    </div> }
                </div>
            </div>
            )
}
}

export default AuthorCard;
