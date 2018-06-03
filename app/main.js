/*
// Set up three private modules or IIFE, budgetController, UIController, controller
// Use controller function to connect all functions and communicate each other
*/

// Budget Controller keeps track income/expense
const budgetController = (function () {

  // Each item has description and value also id
  const Expense = function (id, desc, val) {
    this.id = id;
    this.desc = desc;
    this.val = val;
  };

  const Income = function (id, desc, val) {
    this.id = id;
    this.desc = desc;
    this.val = val;
  };
  // Store income/expense and data
  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  // Create a public function
  return {
    addItem: function (type, description, value) {
      let newItem;
      let ID;
      // Create new ID
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
          newItem = new Expense(ID, description, value);
      } else if (type === 'inc') {
          newItem = new Income(ID, description, value);
      }

      // Push it into data structure
      data.allItems[type].push(newItem);

      // Return the element
      return newItem;
    }
  };
})();

// UIController / Public function
const UIController = (function () {
  // Object that return will be assigned to the UIController
  return {
    getInput: function () {
      // Return all data
      return {
        type: document.querySelector('#value-type').value, // Either inc or exp value
        discription: document.querySelector('#add-todo').value, // Select add-todo input
        value: document.querySelector('#add-value').value // Select add-value input
      };
    }
  };
})();

// Globel Controller
const controller = (function (budgetCtrl, UICtrl) {

  // Set up all eventlisteners
  const setupEventListeners = function () {
    // Select the button
    const submitButton = document.querySelector('#submit-button');
    // On Click
    submitButton.addEventListener('click', ctrlAddItem);
    // Set up keypress when user click enter
    document.addEventListener('keypress', (e) => {
      // Keypress Code, keyCode and Keypress Code for older browser which
      if (e.keyCode === 13 || e.which === 13) {
        console.log('Keypress!');
        ctrlAddItem();
      }
    });
  };

  // Add item
  let ctrlAddItem = () => {
    let input;
    let newItem;
    // 1. Get the field input data
    input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
  };

  // Call setupEventListeners() / Public function
  return {
    init: function () {
      console.log('App started!');
      setupEventListeners();
    }
  };
})(budgetController, UIController);

// Start the app
controller.init();
