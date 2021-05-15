import React from "react";

function ResultsList(props) {
  return (
    <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email Address</th>
    <th>Cell Phone Number</th>
    <th>Location</th>
  </tr>
  {props.results.map(employee => (
    <tr>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.email}</td>
      <td>{employee.cell}</td>
      <td>{employee.location}</td>
  </tr>
  ))}
  
</table>
  );
}

export default ResultsList;