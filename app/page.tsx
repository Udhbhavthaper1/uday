// app/page.tsx

"use client"; 
// Indicates this file is a client-side component.

import { getItems, deleteItem } from '../utils/crud'; 
// Import functions to get all items and delete an item.

import Link from 'next/link'; 
// Import the Link component from Next.js to create navigation links.

export default function HomePage() { 
  // Define the HomePage component.

  const items = getItems(); 
  // Get the list of items using the getItems function.

  const handleDelete = (id: number) => { 
    // Handle the delete operation.
    deleteItem(id); 
    // Delete the item by its id.

    window.location.reload(); 
    // Refresh the page to reflect the changes after deletion.
  };

  return (
    // JSX structure of the component.
    <div>
      <h1>Item List</h1>
      {/* Heading for the item list */}

      <ul>
        {/* Iterate over each item and display it */}
        {items.map(item => (
          <li key={item.id}>
            {/* Display item name and description */}
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <button onClick={() => handleDelete(item.id)}>Delete</button>
            {/* Delete button that calls handleDelete on click */}

            <Link href={`/edit/${item.id}`}>Edit</Link>
            {/* Link to navigate to the edit page for that item */}
          </li>
        ))}
      </ul>

      <Link href="/create">
        <button>Add New Item</button>
      </Link>
      {/* Button to navigate to the Create Item page */}
    </div>
  );
}
