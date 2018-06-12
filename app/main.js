var form = document.getElementById('addForm');
var incomeList = document.getElementById('items');
var expenseList = document.getElementById('negativeItems');
// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    console.log(typeof(newItem));
    //if value is negative place value in expense list 
    if (newItem.indexOf('-') > -1) {
        expenseList.appendChild(li);
    }
    //if value is positive place in income list
    else {
        incomeList.appendChild(li);

    }
}