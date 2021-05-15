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
  getEmployees = async () => {
    let allEmployees = await API.getEmployees()
    console.log(allEmployees)
    this.setState({ results: allEmployees.data.results })
  };

  
  // searchEmployee = name => {
  //   API.getEmployeeByName(name)
  //     .then(res => console.log(res))
  //     // .then(res => this.setState({ results: res.data.data}))
  //     .catch(err => console.log(err));
  // };

  //search employee API based on user input
  //update info displayed on page
  searchEmployee = event => {
    const name = event.target.name.first;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the search form is submitted, search the Employee API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };
  // sortEmployee = heading => {

  // }

  //when sort button is clicked
  // handleSort = event => {
  //   event.preventDefault();
  //   this.sortEmployee(this.state.order)
  // }

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