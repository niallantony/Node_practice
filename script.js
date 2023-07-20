const LinkedList = require('./linkedlist')

const shoppingList = LinkedList.LinkedList();
shoppingList.append('Meat');
shoppingList.append('Bread');
shoppingList.append('Coffee');
shoppingList.append('Cheese');
console.log(shoppingList.toString());
console.log("Element 1: ", shoppingList.at(1).data);
console.log("Head: ",shoppingList.head().data)
shoppingList.prepend('Orange Juice');
console.log("Head: ",shoppingList.head().data)
console.log(shoppingList.toString());
shoppingList.pop();
console.log(shoppingList.toString());
console.log("Contains Coffee? ", shoppingList.contains("Coffee"))
console.log("Where is Coffee? ", shoppingList.find("Coffee"))
console.log("Contains Tea? ", shoppingList.contains("Tea"))
shoppingList.insertAt("Jam",2);
console.log(shoppingList.toString());
shoppingList.removeAt(3);
console.log(shoppingList.toString());