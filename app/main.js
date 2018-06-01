// Handlers
// Select the todo form input
const addTodo = document.getElementById(add-todo);
// Select the value form input
const addValue = document.getElementById(add-value);
// Select the button
const submitButton = document.getElementById(submit-button);
// Select the plus sign
const plus = document.getElementById(plus);
// Select the minus sign
const minus = document.getElementById(minus);

// Todo object
let todoList = {
  // Store todo from input in an array
  todos: [],
  // Display todo method
  displayTodos: function() {
    // Check if the todo array is empty
    if (this.todos.length === 0) {
      console.log('Please add your todo list!');
      //error.innerHTML = 'Please add your todo list!';
    // } else {
          // Loop through the todo array
    //   for (let i = 0; i < this.todos.length; i++) {
    //     if (this.todos[i].complete === true) {
    //       this.todos[i].append();
    //     }
    //   }
    // }
  }
}
