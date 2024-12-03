// utils/crud.ts
type Item = {
    id: number;
    name: string;
    description: string;
  };
  
  let items: Item[] = [];
  let nextId = 1;
  
  export function getItems(): Item[] {
    return items;
  }
  
  export function getItem(id: number): Item | undefined {
    return items.find(item => item.id === id);
  }
  
  export function createItem(data: { name: string; description: string }): void {
    items.push({ id: nextId++, ...data });
  }
  
  export function updateItem(id: number, data: { name: string; description: string }): void {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      items[itemIndex] = { id, ...data };
    }
  }
  
  export function deleteItem(id: number): void {
    items = items.filter(item => item.id !== id);
  }
  
