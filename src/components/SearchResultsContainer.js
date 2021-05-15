import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultsList from "./ResultsList";
import API from "../utils/API";

class SearchResultsContainer extends Component {
    state = {
        search: "",
        order: "descend",
        results: []
    };

    //Display all employees on page load
    componentDidMount() {
        this.getEmployees();
    };

    //Call all employees from the API
    getEmployees = async() => {
      let allEmployees = await API.getEmployees()
      console.log(allEmployees)
      this.setState({results: allEmployees.data.results})
    };
    

    //search employee API based on user input
    // searchEmployee = name => {
      //TODO: filter method
        // API.getEmployeeByName(name)
        // .then(res => console.log(res))
        // // .then(res => this.setState({ results: res.data.data}))
        // .catch(err => console.log(err));
    // };

    // sortEmployee = heading => {

    // }

    //update info displayed on page
    handleSearch = event => {
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

      //props
      render() {
        return (
          <div>
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleSearch={this.handleSearch}
            />
            <ResultsList results={this.state.results} />
          </div>
        );
      }
    
};



export default SearchResultsContainer;