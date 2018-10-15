import React, { Component } from 'react'

class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorData: [],
        }
    }
    authorCard(author) {
        return (
            <div className="card">
                <div className="card-title">
                    <h5>{author.first} {author.last}</h5>
                </div>
            </div>
            )
    }

    renderAuthors() {
        return this.state.authorData.map(author => <React.Fragment>{this.authorCard(author)}</React.Fragment>)
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
export default Authors;
