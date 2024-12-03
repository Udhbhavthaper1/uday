import { Item } from "../types/item"; 
// Import the Item interface from the file where it's defined.

export const items: Item[] = [ 
  // Exporting a constant array named `items` that holds objects of type `Item`.

  { id: 1, name: "Item 1", description: "Description of Item 1" },
  // The first item with id 1, name "Item 1", and a description.

  { id: 2, name: "Item 2", description: "Description of Item 2" },
  // The second item with id 2, name "Item 2", and a description.
];
