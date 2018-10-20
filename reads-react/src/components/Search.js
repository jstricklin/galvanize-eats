import React, { PureComponent } from 'react'

class Search extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchString: "",
            authorResults: [],
            bookResults: [],
        }
    }
    componentDidMount(){
        this.setState({searchString: this.props.terms})
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.terms !== this.props.terms){
            this.setState({searchString: this.props.terms})

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
