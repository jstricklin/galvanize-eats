import React, { Component } from 'react'

class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorData: [],
        }
    }
    renderAuthors() {
        return this.state.authorData.map(author => <React.Fragment><AuthorCard author={author} /></React.Fragment>)
    }
    componentDidMount() {
        this.props.getAuthors()
            .then(res => res.json())
            .then(authors => this.setState({authorData: authors}))
    }

    render() {
        return (
            <div>
                <h1> Authors </h1>
                <div className="bg-warning py-3">
                    <div className="container d-flex flex-wrap justify-content-around">
                        {this.renderAuthors()}
                    </div>
                </div>
            </div>
            )
    }
}
class AuthorCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: true,

        }
    }
    render() {
        return (
            <div>
            <div className="card" onClick={()=>this.setState({hide: !this.state.hide})}>
                <div className="card-title">
                    <h5>{this.props.author.first} {this.props.author.last}</h5>
                </div>
                <div className="card-image">
                    <img src={this.props.author.portraitURL} alt="author pic" />
                </div>
                {this.state.hide ? null : <div className="card-body">
                    <p>{this.props.author.bio}</p>
                </div> }
            </div>
            </div>
            )
    }
}

export default Authors;
