var form = document.getElementById('addForm');
var incomeList = document.getElementById('items');
var expenseList = document.getElementById('negativeItems');
// Form submit event
form.addEventListener('submit', addItem);
incomeList.addEventListener('click', delItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var itemDesc = document.getElementById('desc').value;
    var itemValue = document.getElementById('value').value;
    let validVal = !isNaN(itemValue) && !(itemValue==""); // is itemValue a valid number?
    let validDesc = !(itemDesc == ""); // is itemDesc not an empty string?
    let html = '<li><div class="row"><div class="col-6">%desc%</div><div class="col-6"><span class="float-right">%val%<button class="delete"><img src="images/glyphicons-ok-sign.png"></button></span></div></div></li>';
    let newHtml = html.replace('%desc%', itemDesc);
    newHtml = newHtml.replace('%val%', itemValue)


    // evaluate for valid values first
    if (validDesc && validVal){
        //if value is negative place value in expense list 
        if (itemValue.indexOf('-') > -1) {
            expenseList.insertAdjacentHTML('beforeend', newHtml);
        }
        //if value is positive place in income list
        else {
            // incomeList.appendChild(newHtml);
            incomeList.insertAdjacentHTML('beforeend', newHtml);
        }
    } else {
        alert('Please complete both fields with valid values!');
    }


    form.reset();
}

// Delete item
function delItem(e) {
    
    if(e.target.parentElement.classList.contains('delete')){
        var bi = (e.target.parentElement); // bi = button item
        bi = bi.parentElement.parentElement.parentElement.parentElement;
        incomeList.removeChild(bi);
    }
    
}
