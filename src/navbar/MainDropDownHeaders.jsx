import { Link } from 'react-router-dom';
function MainDropDownHeaders() {
    return (
        <>
            <div className="dropdown hover-dropdown">
                <button className="btn  dropdown-toggle" type="button">
                    Listing
                </button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/addHotel">Add Hotel</Link>
                    <Link className="dropdown-item" to="/addFlight">Add Flight</Link>
                    <Link className="dropdown-item" to="/addCab">Add Cab</Link>
                </div>
            </div>
            <div className="dropdown hover-dropdown">
                <button className="btn  dropdown-toggle" type="button">
                    Pages
                </button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/addHotel">About</Link>
                    <Link className="dropdown-item" to="/addFlight">Contact</Link>
                    <Link className="dropdown-item" to="/addCab">Our Team</Link>
                </div>
            </div>
            <div className="dropdown hover-dropdown">
                <button className="btn  dropdown-toggle" type="button">
                    Accounts
                </button>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/addHotel">User Profile</Link>
                    <Link className="dropdown-item" to="/addFlight">Agent Dashboard</Link>
                    <Link className="dropdown-item" to="/addCab">Master Admin</Link>
                </div>
            </div>
        </>);
}
export default MainDropDownHeaders;