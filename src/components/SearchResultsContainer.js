import React, { Component } from "react";
import SearchResults from "./SearchResults";
import Nav from "./Nav"
import API from "../utils/API";

export default class DataArea extends Component {
  state = {
    search: [{}],
    results: [{}]
  }

  headings = [
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "Location", width: "10%" }
  ]

  search = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.search.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ results: filteredList });
  }

  componentDidMount() {
    API.getEmployees().then(results => {
      console.log(results)
      this.setState({
        search: results.data.results,
        results: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Nav search={this.search} />
        <div>
          <SearchResults
            headings={this.headings}
            search={this.state.results}
          />
        </div>
      </>
    );
  }
}
