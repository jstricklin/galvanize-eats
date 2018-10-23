import React, { Component } from 'react'
import AuthorCard from './AuthorCard'
import { Link } from '@reach/router'
class AuthorAbout extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: null
        }
    }
    componentDidMount(){
        this.props.getAuthor(this.props.name)
            .then(res => res.json())
            .then(json => this.setState({author: json.author[0]}))
    }
    render(){
        return (
            <div className="col-sm-10 mx-auto">
                <Link to=".."><button className="btn btn-dark mt-4"> Go Back </button></Link>
                {this.state.author ? <AuthorCard showEdit={this.props.showEdit} admin={true} author={this.state.author} /> : null}
            </div>
            )
    }
}

export default AuthorAbout
