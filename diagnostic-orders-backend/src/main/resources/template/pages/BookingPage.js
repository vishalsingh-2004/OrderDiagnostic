import React from 'react';
export default function BookingPage() {
  return (
    <div>
      <h2>New Booking</h2>
      <form>
        <label>Select a Test:</label><select><option>Blood Test</option><option>X-Ray</option></select><br />
        <label>Select a Lab:</label><select><option>Lab A</option><option>Lab B</option></select><br />
        <label>Upload Prescription:</label><input type='file' /><br />
        <button type='submit'>Next</button>
      </form>
    </div>
  );
}