
//Inventory Management with Map

const inventory = new Map();
inventory.set("Apples", 10);
inventory.set("Bananas", 25);
inventory.set("Oranges", 15);
inventory.set("Grapes", 30);
inventory.set("Mangoes", 8);

function addItem(itemName, quantity) {
  if (inventory.has(itemName)) {
    const currentQuantity = inventory.get(itemName);
    inventory.set(itemName, currentQuantity + quantity);
    console.log(`Updated ${itemName} quantity to ${inventory.get(itemName)}`);
  }
  else
  {
    inventory.set(itemName, quantity);
    console.log(`Added ${itemName} with quantity ${quantity}`);
  }
}

function getItemQuantity(itemName)
{
    if (inventory.get(itemName)) {
        console.log(inventory.get(itemName));
    }
    else
    {
        console.log(`${itemName} not found!`);
        
    }
}

function removeItem(itemName)
{
    if (inventory.has(itemName)) {
        inventory.delete(itemName);
        console.log(`${itemName} removed succesfully!!`);
    }
    else
    {
        console.log(`${itemName} not found!`);
    }
}

// addItem("Nar", 15);
// addItem("Apples", 32);
// addItem("Apples", 11);

// console.log(inventory);

// getItemQuantity("Armut");


removeItem("Apples");
