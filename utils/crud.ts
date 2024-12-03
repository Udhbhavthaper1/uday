// Define the structure of the Item type
type Item = {
  id: number;          // Unique identifier for the item (must be a number)
  name: string;        // Name of the item (must be a string)
  description: string; // Description of the item (must be a string)
};

// Initialize an empty array to store items
let items: Item[] = []; 

// Variable to track the next ID to be assigned to a new item
let nextId = 1; 

// Function to get all items
export function getItems(): Item[] {
  return items; // Returns the entire array of items
}

// Function to get a single item by its ID
export function getItem(id: number): Item | undefined {
  // Finds and returns the item with the matching ID, or undefined if not found
  return items.find(item => item.id === id);
}

// Function to create a new item
export function createItem(data: { name: string; description: string }): void {
  // Pushes a new item into the array with a unique ID and the provided name and description
  items.push({ id: nextId++, ...data }); 
  // Increments nextId so that each new item gets a unique ID
}

// Function to update an existing item by ID
export function updateItem(id: number, data: { name: string; description: string }): void {
  // Finds the index of the item to update
  const itemIndex = items.findIndex(item => item.id === id);

  // If the item is found, update its data
  if (itemIndex !== -1) {
    items[itemIndex] = { id, ...data }; // Replace the old item with the updated one
  }
}

// Function to delete an item by ID
export function deleteItem(id: number): void {
  // Filters out the item with the given ID from the array (removes it)
  items = items.filter(item => item.id !== id); 
}
