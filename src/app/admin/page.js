import Link from 'next/link';

export default function AdminPage() {
  return (
    <main>
      <h1>Admin Page</h1>
      <Link href="/admin/tables">Tables</Link>
      <Link href="/admin/reservations">Reservations</Link>
    </main>
  );
}
