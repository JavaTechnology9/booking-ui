import { Component } from 'react';

import BookingLogo from './BookingLogo.svg';
import './BookingLogo.css';
import './css/HoverDropdown.css';
import './css/navbar.css';

import UserProfilePopup from './navbar/UserProfilePopup';
import Notification from './navbar/Notification';
import MainDropDownHeaders from './navbar/MainDropDownHeaders';
import MainTabs from './navbar/MainTabs';

export default class BookingHome extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (<div>
			<header className="navbar-light header-sticky">
				<nav className="navbar navbar-expand-lg navbar-light bg-light booking-header">
					<div className="container-fluid booking-navbar">
						<a className="navbar-brand" href="/">
							<img className="light-mode-item navbar-brand-item" width={120} height={120} src={BookingLogo} alt="logo" />
						</a>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<MainDropDownHeaders />
							<MainTabs />
							<Notification />
							<UserProfilePopup />
							{/* <form className="d-flex">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form> */}
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