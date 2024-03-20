const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size, toppings) {
    this.orderNumber++;
    this.emit("order-pizza", size, toppings);
  }
  displayOrderNumber() {
    console.log(`current order${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
