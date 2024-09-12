import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingHome from './BookingHome';
import AddHotel from './hotel/AddHotel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingHome />} />
        <Route path="/addHotel" element={<AddHotel />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

