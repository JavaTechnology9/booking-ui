import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingLogo from './BookingLogo.svg';
import './BookingLogo.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default class BookingHome extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (<div>
			<header className="navbar-light header-sticky">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							<img className="light-mode-item navbar-brand-item" width={120} height={120} src={BookingLogo} alt="logo" />
						</a>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/addHotel" className="nav-link active" aria-current="page" href="#">Add Hotel</Link>
								</li>
								<li className="nav-item">
									<Link to="/addHotel" className="nav-link active">Add Flight</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link active" href="#">Add Cab</a>
								</li>
								{/* <li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Dropdown
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><hr className="dropdown-divider" /></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</li> */}
								
							</ul>
							<form className="d-flex">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						</div>
					</div>
				</nav>

			</header>
			<div>
				<h1>Find the top Hotels nearby.</h1>
			</div>
		</div>)
	}

}