import { useState } from 'react';
import axios from 'axios';

const AddTableForm = ({ onTableAdded }) => {
  const [number, setNumber] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://localhost:7174/table', { number, capacity });
      setNumber('');
      setCapacity(0);
      onTableAdded();
    } catch (err) {
      alert('Failed to add table');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Table</h2>
      <label>
        Table Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Capacity:
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Table'}
      </button>
    </form>
  );
};

export default AddTableForm;
