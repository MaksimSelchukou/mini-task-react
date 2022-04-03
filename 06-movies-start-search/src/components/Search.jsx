import React from "react";

export class Search extends React.Component {
    state = {
        search: "",
    }

    handleSearchInput = (event) => {
        this.setState({ search: event.target.value })
    }

    handleKey = (event) => {
        if (event.key === 'Enter')
            this.props.searchMovies(this.state.search)
    }

    handleSearch = (str) => {
        this.props.searchMovies(this.state.search)
    }

    render() {
        return (

            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleSearchInput}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>

        )
    }
}