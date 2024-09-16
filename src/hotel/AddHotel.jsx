import React,{useState} from "react";
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
    
    sendHotelRequest(event){
        event.preventDefault();
        this.insertIntoArray();
       //console.log(this.state);
       const {hotelName,hotelDescription,price,availableRooms,location,rooms}= this.state
       const hotelData={hotelName,hotelDescription,price,availableRooms,location,rooms};
       console.log(hotelData);
        console.log("send Request to Backend application");
        //console.log(this.state);
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