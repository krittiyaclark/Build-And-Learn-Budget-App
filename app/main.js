// Budget Controller
let budgetController = (function () {

})();

// UIController
let UIController = (function () {

})();

// Globel Controller
let controler = (function (budgetCtrl, UICtrl) {
  // Add item
  let ctrlAddItem = () => {
    // 1. Get the field input data

    // 2. Add the item to the budget controler

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    console.log('It works!');
  }

  // Select the button
  let submitButton = document.querySelector('#submit-button');
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
