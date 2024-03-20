const EventEmitter = require("node:events"); //we wrote event emitter as it return a class eventEmitter that emits and responds to events
const PizzaShop = require("./pizza-shop");
const pizzaShop = new PizzaShop();
const emitter = new EventEmitter(); //instatiating a eventemitter class to create a emitter object

emitter.on("order-pizza", (size, toppings) => {
  console.log(`baking bread${size}${toppings}`);
}); //on takes event name and calls the callbackfuntion(listener 2nd parameter)
emitter.emit("order-pizza", "small", "mushrooms slicedd"); //to respond to this emit event above we need to register a listerner ("on")

//we can also pass arguments to emit event emitter.emit("order-pizza","large","mushroom") these are avaliable as arguments for callback function of ("on event")
// emitter.on("order-pizza", (size) => {
//   console.log(`baking pizza${size}`);
// }); //on takes event name and calls the callbackfuntion(listener 2nd parameter)
// emitter.emit("order-pizza","large");

//we can write multiple listeners that listenets to emit event

//next we see how to build own module that help to build on  evenitemitter class using inheritance
pizzaShop.on("order-pizza", (size, toppings) => {
  console.log(`baking pizza${size}${toppings}`);
});
pizzaShop.order("largeest", "mushroom");
pizzaShop.displayOrderNumber();
