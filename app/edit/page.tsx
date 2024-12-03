// app/edit/[id]/page.tsx

"use client"; 
// Marks this file as a client-side component.

import { useState, useEffect } from 'react'; 
// Importing useState and useEffect hooks from React.

import { useRouter } from 'next/navigation'; 
// Import useRouter hook from Next.js for navigation after form submission.

import { getItem, updateItem } from '../../../utils/crud'; 
// Import functions for getting an item and updating it.

export default function EditPage({ params }: { params: { id: string } }) { 
  // Define the EditPage component, accepting dynamic params to fetch a specific item.

  const router = useRouter(); 
  // Get the router instance for navigation.

  const [name, setName] = useState(''); 
  // State to hold the name input value.

  const [description, setDescription] = useState(''); 
  // State to hold the description input value.

  useEffect(() => { 
    // useEffect hook to run the code when the component mounts or when params.id changes.
    const item = getItem(Number(params.id)); 
    // Fetch the item based on the id passed in the URL (converted to a number).

    if (item) { 
      // If the item exists, populate the form fields with the item's data.
      setName(item.name);
      setDescription(item.description);
    }
  }, [params.id]); 
  // Dependency array ensures this effect runs when the id changes.

  const handleSubmit = (e: React.FormEvent) => { 
    // Handle form submission when the user updates the item.
    e.preventDefault(); 
    // Prevent the default form submission behavior (page reload).

    updateItem(Number(params.id), { name, description }); 
    // Call updateItem function to save the changes to the item.

    router.push('/'); 
    // Redirect to the home page after updating the item.
  };

  return (
    // JSX structure for rendering the edit page.
    <div>
      <h1>Edit Item</h1>
      {/* Heading for the page */}
      <form onSubmit={handleSubmit}>
        {/* Form element for editing the item */}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Name input field with state management */}
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Description textarea with state management */}
        </label>
        <button type="submit">Update</button>
        {/* Button to submit the form and update the item */}
      </form>
    </div>
  );
}
