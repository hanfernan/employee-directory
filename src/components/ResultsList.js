import React from "react";

function ResultsList(props) {
  return (
    <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email Address</th>
    <th>Cell Phone Number</th>
    <th>State</th>
    <th>Country</th>
  </tr>
  {props.results.map(employee => (
    <tr>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>{employee.cell}</td>
      <td>{employee.location.state}</td>
      <td>{employee.location.country}</td>
  </tr>
  ))}
  
</table>
  );
}

export default ResultsList;