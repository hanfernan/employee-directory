import React from "react";
import EmployeeList from "./EmployeeList";

function SearchResults({ headings, search }) {
    return (
        <div className="m-3">
            <table className="table">
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    key={name}
                                    style={{ width }}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <EmployeeList search={search} />
            </table>
        </div>
    );
}

export default SearchResults;
