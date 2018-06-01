// Handlers
// Select the todo form input
const addTodo = document.getElementById(add-todo).value;
// Select the value form input
const addValue = document.getElementById(add-value).value;
// Select the button
const submitButton = document.getElementById(submit-button);
// Select the plus sign
const plus = document.getElementById(plus);
// Select the minus sign
const minus = document.getElementById(minus);
// Select p for an error message
const error = document.getElementById(error);
// Todo object
const todoList = {
  // Store todo from input in an array
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        // displayTodos() {
        //   // Check if the todo array is empty
        //   if (this.allItems.exp.length === 0) {
        //     console.log('Please add your todo list!');
        //     error.innerHTML = 'Please add your todo list!';
        //   // } else {
        //         // Loop through the todo array
        //   //   for (let i = 0; i < this.todos.length; i++) {
        //   //     if (this.todos[i].complete === true) {
        //   //       this.todos[i].append();
        //   //     }
        //   //   }
        //   // }
        //   }
        //  }
       };
// Display todo function
function displayTodos(value) {
       if (addValue === null) {
        console.log('Please add your todo list!');
        error.innerHTML = 'Please add your todo list!';
}
}

displayTodos();
// Button on click
submitButton.document.addEventListener('click', displayTodos);
