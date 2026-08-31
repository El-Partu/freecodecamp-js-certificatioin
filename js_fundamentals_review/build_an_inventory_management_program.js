const inventory = [];

function findProductIndex(name) {
  let index = 0;

  for (const invent of inventory) {
    if (invent.name.toLowerCase() === name.toLowerCase()) {
      return index;
    }

    index++;
  }

  return -1;
}

function addProduct(obj) {
  let isPresent = false;
  for (const product of inventory) {
    if (obj.name.toLowerCase() === product.name.toLowerCase()) {
      product.quantity += obj.quantity;

      console.log(`${product.name} quantity updated`);

      isPresent = true;
    }
  }

  if (!isPresent) {
    inventory.push({ name: obj.name.toLowerCase(), quantity: obj.quantity });
    console.log(`${obj.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  let isPresent = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      if (inventory[i].quantity >= quantity) {
        inventory[i].quantity -= quantity;
        console.log(
          `Remaining ${inventory[i].name} pieces: ${inventory[i].quantity}`,
        );

        if (inventory[i].quantity === 0) {
          inventory.splice(i, 1);
        }
      } else {
        console.log(
          `Not enough ${inventory[i].name} available, remaining pieces: ${inventory[i].quantity}`,
        );
      }

      isPresent = true;
    }
  }

  if (!isPresent) {
    console.log(`${name.toLowerCase()} not found`);
  }
}

// console.log(findProductIndex("Flour"));
