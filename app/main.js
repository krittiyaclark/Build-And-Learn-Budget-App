// Budget Controller
const budgetController = (function () {

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
const controler = (function (budgetCtrl, UICtrl) {
  // Add item
  let ctrlAddItem = () => {
    // 1. Get the field input data
    let input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controler

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    console.log('It works!');
  }

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
})(budgetController, UIController);
