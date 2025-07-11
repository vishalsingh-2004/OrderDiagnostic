import React from 'react';
export default function AdminPage() {
  return (
    <div>
      <h2>Booking List (Admin)</h2>
      <table border='1'>
        <thead><tr><th>Name</th><th>Test</th><th>Status</th><th>Lab</th></tr></thead>
        <tbody><tr><td>John</td><td>Blood Test</td><td>Pending</td><td>Lab A</td></tr></tbody>
      </table>
    </div>
  );
}