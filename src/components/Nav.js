import React from "react";

function Nav({ search }) {
    return (
        <nav className="navbar navbar-expand navbar-light">
            <div>
                <div>
                    <form className="form-inline">
                        <input
                            type="search"
                            placeholder="Search for an employee "
                            onChange={e => search(e)}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
