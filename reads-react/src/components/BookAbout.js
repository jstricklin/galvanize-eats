import React, { Component } from 'react'
import BookCard from './BookCard'

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
                {this.state.book ? <BookCard title={this.props.title} book={this.state.book} /> : null}
            </div>
            )
    }
}

export default BookAbout
