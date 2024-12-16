'use client';
import { useState, useEffect } from 'react';
import AddTableForm from '@/ui/addTableForm';
import { tableService } from '@/lib/table/tableService';
import { useSession } from 'next-auth/react';

const TablesPage = () => {
  const { data: session } = useSession();
  const token = session?.accessToken;
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTables = async () => {
    setLoading(true);
    try {
      const data = await tableService.getTables(token);
      setTables(data);
    } catch (err) {
      setError('Failed to fetch tables');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (tableId) => {
    setError(null);
    try {
      await tableService.deleteTable(token, tableId);
      fetchTables();
    } catch (err) {
      console.error('Error deleting table:', err);
      setError('Failed to delete table');
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <main>
      <h1>Manage Tables</h1>
      <AddTableForm onTableAdded={fetchTables} />
      {loading && <p>Loading tables...</p>}
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.number}</td>
              <td>{table.capacity}</td>
              <td>
                <button onClick={() => handleDelete(table.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TablesPage;
