import React, { Component } from 'react'
import BookCard from './BookCard'
import { Link } from '@reach/router'

class BookAbout extends Component {
    constructor(props){
        super(props)
        this.state = {
            book: null
        }
    }
    componentDidMount(){
        this.props.getBook(this.props.title)
            .then(res => res.json())
            .then(json => this.setState({book: json.result[0]}))
    }
    render(){
        return (
            <div>
                <Link to=".."><button className="btn"> Go Back </button></Link>
                {this.state.book ? <BookCard title={this.props.title} book={this.state.book} /> : null}
            </div>
            )
    }
}

export default BookAbout
