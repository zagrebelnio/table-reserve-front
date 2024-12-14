import { useState } from 'react';

const BookingByDateForm = ({ onDateSelected }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelected(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Filter by Date</h2>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default BookingByDateForm;
