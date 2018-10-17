import React, { Component } from 'react'
import AuthorCard from './AuthorCard'
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
            .then(json => this.setState({author: json.name[0]}))
    }
    render(){
        return (
            <div>
                {this.state.author ? <AuthorCard author={this.state.author} /> : null}
            </div>
            )
    }
}

export default AuthorAbout
