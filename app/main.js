var form = document.getElementById('addForm');
var incomeList = document.getElementById('items');
var expenseList = document.getElementById('negativeItems');
// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var itemDesc = document.getElementById('desc').value;
    var itemValue = document.getElementById('value').value;
    let html = '<li><div class="row"><div class="col-6">%desc%</div><div class="col-6"><span class="float-right">%val%<button class=""><img src="images/glyphicons-ok-sign.png"></button></span></div></div></li>';
    let newHtml = html.replace('%desc%', itemDesc);
    newHtml = newHtml.replace('%val%', itemValue)


    console.log(newHtml);
    console.log(incomeList);
    //if value is negative place value in expense list 
    if (itemValue.indexOf('-') > -1) {
        expenseList.insertAdjacentHTML('beforeend', newHtml);
    }
    //if value is positive place in income list
    else {
        // incomeList.appendChild(newHtml);
        incomeList.insertAdjacentHTML('beforeend', newHtml);
    }
    form.reset();
}
