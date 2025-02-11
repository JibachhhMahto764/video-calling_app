import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [roomCode,setRoomCode] = useState("");
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate('/room/${roomCode}')

    }
    return (
        <div className="home-page">
            <form onSubmit={handleFormSubmit} className="form">
             <div>
                 
                <label> Enter Room Code</label>
                <input  value={roomCode} onChange = {e => setRoomCode(e.target.value)}type="text" required placeholder="Enter Room code" />

             </div>
                <div>
                <label> Enter Name</label>
                <input  value={roomName} onChange = {e => setRoomName(e.target.value)}type="text" required placeholder="Enter Your Name" />

             </div>
                <div>
                <label> Enter Password</label>
                <input  value={roomPassword} onChange = {e => setRoomPassword(e.target.value)}type="text" required placeholder="Enter Password" />

             </div>
             <button type="submit">Enter Room</button>
            </form>
        </div>
    );
};
export default HomePage;
