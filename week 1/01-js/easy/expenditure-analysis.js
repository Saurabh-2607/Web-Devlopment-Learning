/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const item1 = {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
} 

const item2 = {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'drinks',
  itemName: 'cokes',
} 

const item3 = {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'cosmetic',
  itemName: 'mosturizer',
} 

const transections[ item1 , item2 , item3];




function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;


