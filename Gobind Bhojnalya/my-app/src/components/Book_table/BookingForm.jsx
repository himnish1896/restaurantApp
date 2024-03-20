import React, { useState,useEffect } from 'react';
import './BookingForm.css';
import './BookingForm.css'; // Import your CSS file for styling

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };  

const BookingForm = () => {
  const [formData, setFormData] = useState({
    reservation_id: '',
    customer_name: '',
    contact_number: '',
    reservation_date: '',
    number_of_guests: '',
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/get-bookings') 
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8081/submit-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Record submitted successfully. Please reload the page to see updated booking list.");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Record submission failed: ", error);
      });
  };

  const handleUpdate = () => {
    const { reservation_id, ...updatedData } = formData; 

    fetch(`http://localhost:8081/update-booking/${reservation_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Update Success:', data);
        alert("Record updated successfully. Please reload the page to see updated booking list.");
      })
      .catch((error) => {
        console.error('Update Error:', error);
        alert("Record updation failed: ", error);
      });
  };

  const handleDelete = () => {
    const { reservation_id } = formData;

    fetch(`http://localhost:8081/delete-booking/${reservation_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Delete Success:', data);
        alert("Record deleted successfully. Please reload the page to see updated booking list.");
      })
      .catch((error) => {
        console.error('Delete Error:', error);
        alert("Record deletion failed: ", error);
      });
  };

  return (
    <div className='outer'>
        <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Booking ID:
          <input
            className="input-field"
            type="text"
            name="reservation_id"
            value={formData.reservation_id}
            onChange={handleInputChange}
            required
          />
        </label>
      <label>
        Customer Name:
        <input
          className="input-field"
          type="text"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Contact Number:
        <input
          className="input-field"
          type="text"
          name="contact_number"
          value={formData.contact_number}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Reservation Date:
        <input
          className="input-field"
          type="date"
          name="reservation_date"
          min="2024-01-15"
          value={formData.reservation_date}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Number of Guests:
        <input
          className="input-field"
          type="number"
          name="number_of_guests"
          value={formData.number_of_guests}
          onChange={handleInputChange}
        />
      </label>

      <button className="submit-button" type="submit">Submit</button>
      <div className="buttona">
      <button className="update-button" onClick={handleUpdate}>
        Update Booking
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Delete Booking
      </button>
      </div>
    </form>
    <div className="booking-list">
      <h2 className='bookinglist'>Booking List</h2>
      <table border={2} className='entries'>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Customer Name</th>
            <th>Contact Number</th>
            <th>Reservation Date</th>
            <th>Number of Guests</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.reservation_id}>
              <td>{booking.reservation_id}</td>
              <td>{booking.customer_name}</td>
              <td>{booking.contact_number}</td>
              <td>{formatDate(booking.reservation_date)}</td>
              <td>{booking.number_of_guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BookingForm;
