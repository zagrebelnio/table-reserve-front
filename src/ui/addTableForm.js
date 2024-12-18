import { useState } from 'react';
import { tableService } from '@/lib/table/tableService';
import { useSession } from 'next-auth/react';
import styles from './addTableForm.module.css';

const AddTableForm = ({ onTableAdded }) => {
  const { data: session } = useSession();
  const token = session?.accessToken;
  const [number, setNumber] = useState(1);
  const [capacity, setCapacity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await tableService.createTable(token, {
        number: number.toString(),
        capacity,
      });
      setNumber(1);
      setCapacity(1);
      onTableAdded();
    } catch (err) {
      console.error('Error adding table:', err);
      alert('Failed to add table');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Додати новий столик</h2>
      <label className={styles.label}>
        № Столика:
        <input
          type="number"
          min={1}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Місткість:
        <input
          type="number"
          min={1}
          max={20}
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          required
          className={styles.input}
        />
      </label>
      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? 'Додається...' : 'Додати'}
      </button>
    </form>
  );
};

export default AddTableForm;
