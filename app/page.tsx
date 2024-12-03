// app/page.tsx
"use client";

import { getItems, deleteItem } from '../utils/crud';
import Link from 'next/link';

export default function HomePage() {
  const items = getItems();

  const handleDelete = (id: number) => {
    deleteItem(id);
    window.location.reload(); // Refresh the page to reflect changes
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <Link href={`/edit/${item.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link href="/create">
        <button>Add New Item</button>
      </Link>
    </div>
  );
}
