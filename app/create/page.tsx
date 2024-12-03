// app/create/page.tsx

"use client"; 
// Indicates this file is a client-side component.

import { useState } from 'react'; 
// Import useState for managing state.

import { useRouter } from 'next/navigation'; 
// Import useRouter for navigation.

import { createItem } from '../../utils/crud'; 
// Import the createItem function.

export default function CreatePage() { 
  // Define the CreatePage component.

  const [name, setName] = useState(''); 
  // State for the name input field.

  const [description, setDescription] = useState(''); 
  // State for the description input field.

  const router = useRouter(); 
  // Get the router instance.

  const handleSubmit = (e: React.FormEvent) => { 
    // Handle form submission.
    e.preventDefault(); 
    // Prevent page refresh.

    createItem({ name, description }); 
    // Create a new item.

    router.push('/'); 
    // Redirect to the home page.
  };

  return (
    // JSX structure of the component.
    <div>
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
