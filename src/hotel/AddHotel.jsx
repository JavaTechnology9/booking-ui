import React,{useState} from "react";
import axios from "axios";
export default class AddHotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                hotelName:'',
                hotelDescription:'',
                price:'',
                availableRooms:'',
                location:'',
                rooms:[],
                roomName:'',
                roomPrice:'',
                isAvailable:false
        }
        this.sendHotelRequest=this.sendHotelRequest.bind(this);
        this.setHotelData = this.setHotelData.bind(this);
        this.setHotelRooms=this.setHotelRooms.bind(this);
    }
    
    async sendHotelRequest(event){
        event.preventDefault();
        this.insertIntoArray();
       //console.log(this.state);
       const {hotelName,hotelDescription,price,availableRooms,location,rooms}= this.state
       const hotelData={hotelName,hotelDescription,price,availableRooms,location,rooms};
       console.log(hotelData);
        console.log("send Request to Backend application");
        try {
            
            const response = await axios.post('http://localhost:8080/hotel/addHotel', hotelData);

            if (response.status === 200) {
                alert(response.data);
                window.location.reload();

            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                const { status, data } = error.response;
                if (status === 401) {
                    this.setState({ message: data });
                } else if (status === 400) {
                    this.setState({ message: data });
                } else if (status === 500) {
                    this.setState({ message: data });
                } else {
                    this.setState({ message: 'An error occurred' });
                }
            } else if (error.request) {
                // The request was made but no response was received
                this.setState({ message: 'No response from server' });
            } else {
                // Something happened in setting up the request that triggered an Error
                this.setState({ message: 'Error: ' + error.message });
            }
        }
    }
    setHotelData(event) {
        const { name, value } = event.target;
        //console.log(name);
        console.log(value);
        this.setState({
            [name]: value,
        });
    }
    setHotelRooms(event){
        const { name, value } = event.target;
        console.log(value);
        this.setState({
            [name]: value,
        });
        
    }
    
    insertIntoArray=()=>{
        let {roomName, roomPrice,isAvailable,rooms}=this.state;
        const roomData={roomName, roomPrice,isAvailable};
        rooms.push(roomData);
        this.setState({rooms: rooms});
    }
    render() {
        return (
            <div>
                <h2>Add Hotel</h2>
                <form onSubmit={this.sendHotelRequest}>
                    <div className="w-50">
                        <div className="col-auto">
                            <label for="hotelName" className="col-form-label">Hotel Name</label>
                            <input type="text" id="hotelName" className="form-control" name="hotelName" onChange={this.setHotelData} required/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelPrice" className="col-form-label">Hotel Price</label>
                            <input type="number" id="hotelPrice" className="form-control" name="price" onChange={this.setHotelData} required/ >
                        </div>
                       
                        <div className="col-auto">
                            <label for="hotelDescription" className="col-form-label">Hotel Description</label>
                            <input type="text" id="hotelDescription" className="form-control" name="hotelDescription" onChange={this.setHotelData} required/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelArooms" className="col-form-label">Hotel Available Rooms</label>
                            <input type="text" id="hotelArooms" className="form-control" name="availableRooms" onChange={this.setHotelData} required/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelLocations" className="col-form-label">Hotel Locations</label>
                            <input type="text" id="hotelLocation" className="form-control" name="location" onChange={this.setHotelData} required/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="hotelDescription" className="col-form-label">Hotel Rooms</label>
                        </div>
                        <hr/>
                        <div className="col-auto">
                            <label for="roomName" className="col-form-label">Room Name</label>
                            <input type="text" id="roomName" className="form-control" name="roomName" onChange={this.setHotelRooms} required/ >
                        </div>
                        
                        <div className="col-auto">
                            <label for="roomPrice" className="col-form-label">Room Price</label>
                            <input type="text" id="roomPrice" className="form-control"name="roomPrice"  onChange={this.setHotelRooms} required/>
                        </div>
                        
                        <div className="col-auto">
                            <label for="roomAvailable" className="col-form-label">Room is Available</label>
                            <input type="text" id="roomAvailable" className="form-control" name="isAvailable" onChange={this.setHotelRooms} required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}