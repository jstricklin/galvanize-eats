import React, { PureComponent } from 'react'
const baseURL = 'http://localhost:3000/search'

class Search extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchString: "",
            authorResults: [],
            bookResults: [],
        }
    }
    startSearch = () => {

        fetch(`${baseURL}/${this.props.terms}`, {"content-type": 'application/json'})
            .then(res => res.json())
            .then(res => this.setState({authorResults: res.authors, bookResults: res.books}))

    }
    componentDidMount(){
        this.setState({searchString: this.props.terms})
        this.startSearch()
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.terms !== this.props.terms){
            this.setState({searchString: this.props.terms})
            this.startSearch()
        }
    }
    render() {
        return (
            <div>

                search results for: "{this.state.searchString}"

            </div>
        )
    }
}

export default Search;
