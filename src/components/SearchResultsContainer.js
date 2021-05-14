import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultsContainer extends Component {
    state = {
        search: "",
        results: []
    };

    //Display all employees on page load
    //TODO: What do I put in "" to display all?
    componentDidMount() {
        this.searchEmployee("");
    };

    //search employee API based on user input
    searchEmployee = name => {
        API.search(name)
        .then(res => this.setState({ results: res.data.data}))
        .catch(err => console.log(err));
    };

    //update info displayed on page
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, search the Employee API for `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
      };

      render() {
        return (
          <div>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <ResultList results={this.state.results} />
          </div>
        );
      }
    
};



export default SearchResultsContainer;