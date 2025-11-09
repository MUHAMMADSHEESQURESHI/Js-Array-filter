// Data arrays
var cars = ['civic', 'mehran', 'alto', 'cultus', 'fortuner'];
var fruits = ['orange', 'banana', 'apple', 'kiwi', 'melon'];
var colours = ['red', 'yellow', 'orange', 'green'];
var all = [];

// Merge arrays into "all" manually (no ES6)
for (var i = 0; i < cars.length; i++) {
  all[all.length] = cars[i];
}
for (var j = 0; j < fruits.length; j++) {
  all[all.length] = fruits[j];
}
for (var k = 0; k < colours.length; k++) {
  all[all.length] = colours[k];
}

// Default category
var currentCategory = 'all';

// Function to display items in <ul>
function displayItems(items) {
  var list = document.getElementById('productList');
  list.innerHTML = '';

  for (var i = 0; i < items.length; i++) {
    var li = document.createElement('li');
    li.textContent = items[i];
    list.appendChild(li);
  }
}

// Show all items on start
displayItems(all);

// Function to show by category
function showCategory(cat) {
  currentCategory = cat;
  var items = [];

  if (cat === 'all') {
    items = all;
  } else if (cat === 'fruits') {
    items = fruits;
  } else if (cat === 'cars') {
    items = cars;
  } else if (cat === 'colours') {
    items = colours;
  }

  displayItems(items);
}

// Function to search (no filter method)
function searchItems() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var baseArray;

  // Choose which array to search
  if (currentCategory === 'all') baseArray = all;
  else if (currentCategory === 'fruits') baseArray = fruits;
  else if (currentCategory === 'cars') baseArray = cars;
  else if (currentCategory === 'colours') baseArray = colours;

  var results = [];
  for (var i = 0; i < baseArray.length; i++) {
    var name = baseArray[i].toLowerCase();
    // Check if current word starts with search input
    var match = true;
    for (var j = 0; j < input.length; j++) {
      if (name.charAt(j) !== input.charAt(j)) {
        match = false;
        break;
      }
    }
    if (match) {
      results[results.length] = baseArray[i];
    }
  }

  displayItems(results);
}

// Live search while typing
document.getElementById('searchInput').onkeyup = searchItems;

// Optional: click button also triggers search
document.getElementById('searchBtn').onclick = searchItems;
