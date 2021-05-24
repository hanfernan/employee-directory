import React from "react";

function EmployeeList({ search }) {
    return (
        <tbody>
            {search[0] !== undefined && search[0].name !== undefined ? (
                search.map(({name, phone, email, location }) => {
                    return (
                        <tr>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto:" + email} target="__blank">
                                    {email}
                                </a>
                            </td>
                            <td data-th="Location" className="align-middle">
                                {location.state}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <></>
            )}
        </tbody>
    );
}

export default EmployeeList;
