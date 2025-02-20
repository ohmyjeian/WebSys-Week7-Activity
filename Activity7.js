// Part 1: Data Types

let productName = "T-Shirt";
let productId = Symbol("uniqueId");
let price = 25.99;
let isOnSale = true;
let quantity = 50;


console.log(typeof productName);
console.log(typeof productId);
console.log(typeof price); 
console.log(typeof isOnSale); 
console.log(typeof quantity); 


let inventory = [
  { productName: "Jacket", productId: Symbol("id1"), price: 95.99, isOnSale: true, quantity: 50 },
  { productName: "Sandals", productId: Symbol("id2"), price: 55.99, isOnSale: false, quantity: 35 },
  { productName: "Heals", productId: Symbol("id3"), price: 35.99, isOnSale: true, quantity: 45 }
];

// Part 2: Immutability

const frozenProduct = inventory[0];
Object.freeze(frozenProduct);


frozenProduct.price = 105;
frozenProduct.discount = 2.5;
delete frozenProduct.quantity;

console.log(frozenProduct);
console.log(frozenProduct.price); 
console.log(frozenProduct.discount);
console.log(frozenProduct.quantity); 


frozenProduct.details = { color: "Green", size: "M" }; 
Object.freeze(frozenProduct);


frozenProduct.details.color = "Red"; 
console.log(frozenProduct.details.color); 


function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
}


deepFreeze(frozenProduct);
frozenProduct.details.color = "Blue"; 
console.log(frozenProduct.details.color); 

// Part 3: Restricted Modifications

const sealedProduct = inventory[1];
Object.seal(sealedProduct);

sealedProduct.price = 69.99; 
sealedProduct.description = "Hoodie";
delete sealedProduct.quantity;

console.log(sealedProduct); 
console.log(sealedProduct.price); 
console.log(sealedProduct.description);
console.log(sealedProduct.quantity); 

// Part 4: Variable Assignment and Mutability

// Primitive variable
let a = 10;
let b = a; 
b = 20;
console.log(a); 
console.log(b); 

// Non-Primitive variable (Object)
let obj1 = { name: "Gwen", age: 21 };
let obj2 = obj1; 
obj2.age = 25;
console.log(obj1.age); 
console.log(obj2.age); 
