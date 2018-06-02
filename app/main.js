// Budget Controller
let budgetController = (function () {

})();

// UIController
let UIController = (function () {

})();

// Globel Controller
let controler = (function (budgetCtrl, UICtrl) {
  // Select the button
  let submitButton = document.querySelector('#submit-button');
  // On Click
  submitButton.addEventListener('click', () => {
    
    // 1. Get the field input data

    // 2. Add the item to the budget controler

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI
    console.log('Click');
  });
})(budgetController, UIController);
