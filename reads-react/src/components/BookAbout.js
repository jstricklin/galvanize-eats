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
            <div className="col-sm-10 mx-auto">
                <Link to=".."><button className="btn btn-dark mt-4"> Go Back </button></Link>
                {this.state.book ? <BookCard showEdit={this.props.showEdit} title={this.props.title} book={this.state.book} /> : null}
            </div>
            )
    }
}

export default BookAbout
