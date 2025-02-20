// Part 1: Data Types

let productName = "BINI Lightstick";
let productId = Symbol("bloom0001");
let price = 1299.99;
let isOnSale = false;
let quantity = 100;

console.log(typeof productName);
console.log(typeof productId);
console.log(typeof price);
console.log(typeof isOnSale);
console.log(typeof quantity);

// Inventory Array
let inventory = [
  { productName: "BINI Lightstick", productId: Symbol("bloom0001"), price: 1299.99, isOnSale: false, quantity: 100 },
  { productName: "BINI T-Shirt", productId: Symbol("bloom0002"), price: 799.99, isOnSale: true, quantity: 50 },
  { productName: "BINI Photocard Set", productId: Symbol("bloom0003"), price: 499.99, isOnSale: false, quantity: 200 }
];

// Part 2: Immutability

const frozenProduct = inventory[0];
Object.freeze(frozenProduct);

// Attempted Modifications
frozenProduct.price = 1399.99;
frozenProduct.discount = 10;
delete frozenProduct.quantity;

console.log(frozenProduct); 
console.log(frozenProduct.price); 
console.log(frozenProduct.discount); 
console.log(frozenProduct.quantity); 

// Adding Nested Object before Freezing
frozenProduct.details = { color: "White", size: "One Size" };
Object.freeze(frozenProduct);

frozenProduct.details.color = "Pink";
console.log(frozenProduct.details.color); 

// Deep Freeze Function
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

sealedProduct.price = 849.99;
sealedProduct.description = "Limited Edition";
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
console.log(a); // 10
console.log(b); // 20

// Non-Primitive variable (Object)
let obj1 = { name: "Aya", age: 21 };
let obj2 = obj1;
obj2.age = 25;
console.log(obj1.age); // 25
console.log(obj2.age); // 25

// Part 5: Best Practices
// Use const for constants
const MAX_STOCK = 500;

// Object.freeze() for truly immutable objects like product metadata
const productMetadata = Object.freeze({ brand: "BINI Official Merch", releaseYear: 2024 });

// Object.seal() when allowing modifications but preventing property additions/removals
let userPreferences = { theme: "dark", notifications: true };
Object.seal(userPreferences);
userPreferences.theme = "light"; // Allowed
userPreferences.language = "English"; // Not allowed

testVariable = "Invalid Name"; // Missing let/const (bad practice)
