import HotelIcon from '../images/hotel-icon.png'
import FlightIcon from '../images/flight-icon.png'
import CabIcon from '../images/car-icon.png'
import TourIcon from '../images/tour-icon.png'
function MainTabs() {
    return (<>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link btn btn-light active" href="#hotels">
                        <img src={HotelIcon} alt="Hotel" className="nav-icon nav-logo" />
                        Hotel
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light" href="#flights">
                        <img src={FlightIcon} alt="Flight" className="nav-icon nav-logo" />
                        Flight
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light" href="#cars">
                        <img src={CabIcon} alt="Car" className="nav-icon nav-logo" />
                        Car
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-light" href="#tours">
                        <img src={TourIcon} alt="Tour" className="nav-icon nav-logo" />
                        Tour
                    </a>
                </li>
            </ul>
        </div>
    </>);
}
export default MainTabs;