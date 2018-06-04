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
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

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
  // DOM selector
  let DOMstrings = {
      inputType: '#value-type',
      inputDescription: '#add-todo',
      inputValue: '#add-value',
      inputBtn: '#submit-button',
      incomeContainer: '.income-list',
      expensesContainer: '.expenses-list'
  };

  // Object that return will be assigned to the UIController
  return {
    getInput: function () {
      // Return all data
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Either inc or exp value
        description: document.querySelector(DOMstrings.inputDescription).value, // Select add-todo input
        value: document.querySelector(DOMstrings.inputValue).value // Select add-value input
      };
    },

    addListItem: function (obj, type) {
      let html;
      let newHtml;
      let element;
      // Create HTML string with placeholder text
      if (type === 'inc') {
          element = DOMstrings.incomeContainer;

          html = '<div class="item clearfix" id="income-%id%"> <div class="item-description">%desc%</div><div class="right clearfix"><div class="item-value">%val%</div><div class="item-delete"><button class="item-delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
          element = DOMstrings.expensesContainer;

          html = '<div class="item clearfix" id="expense-%id%"><div class="item-description">%desc%</div><div class="right clearfix"><div class="item-value">%val%</div><div class="item-percentage"></div><div class="item-delete"><button class="item-delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%desc%', obj.desc);
      newHtml = newHtml.replace('%val%', obj.val);

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    getDOMstrings: function () {
        return DOMstrings;
    }
  };
})();

// Globel Controller
const controller = (function (budgetCtrl, UICtrl) {
  // Set up all eventlisteners
  const setupEventListeners = function () {
    let DOM = UICtrl.getDOMstrings();
    // On Click
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
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
    UICtrl.addListItem(newItem, input.type);
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
