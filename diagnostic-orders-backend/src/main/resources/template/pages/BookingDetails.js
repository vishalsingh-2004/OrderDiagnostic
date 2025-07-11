import React from 'react';
export default function BookingDetails() {
  return (
    <div>
      <h2>Booking Details</h2>
      <form>
        <label>Name:</label><input type='text' /><br />
        <label>Date:</label><input type='date' /><br />
        <label>Time:</label><input type='time' /><br />
        <label>Address:</label><input type='text' /><br />
        <button type='submit'>Confirm Booking</button>
      </form>
    </div>
  );
}