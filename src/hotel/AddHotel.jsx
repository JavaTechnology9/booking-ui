import React from "react";
export default class AddHotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Add Hotel</h2>
                <form>
                    <div className="w-50">
                        <div className="col-auto">
                            <label for="hotelName" className="col-form-label">Hotel Name</label>
                            <input type="text" id="hotelName" className="form-control"/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelPrice" className="col-form-label">Hotel Price</label>
                            <input type="number" id="hotelPrice" className="form-control"/ >
                        </div>
                       
                        <div className="col-auto">
                            <label for="hotelDescription" className="col-form-label">Hotel Description</label>
                            <input type="text" id="hotelDescription" className="form-control"/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelArooms" className="col-form-label">Hotel Available Rooms</label>
                            <input type="text" id="hotelArooms" className="form-control"/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelLocations" className="col-form-label">Hotel Locations</label>
                            <input type="text" id="hotelLocation" className="form-control"/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelDescription" className="col-form-label">Hotel Rooms</label>
                        </div>
                        <hr/>
                        <div className="col-auto">
                            <label for="roomName" className="col-form-label">Room Name</label>
                            <input type="text" id="roomName" className="form-control"/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="roomPrice" className="col-form-label">Room Price</label>
                            <input type="text" id="roomPrice" className="form-control" />
                        </div>
                        
                        <div className="col-auto">
                            <label for="roomAvailable" className="col-form-label">Room is Available</label>
                            <input type="text" id="roomAvailable" className="form-control" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}