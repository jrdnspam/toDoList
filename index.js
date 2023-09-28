document.addEventListener('DOMContentLoaded', function() {
  // Code placed here will run when the DOM content has loaded.
  
  // Returns the first element with the 'todo-input' id
document.getElementById('todo-input');

//assign the elements references to variables
var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');
var addButton = document.getElementById('add-button');
var todoCount = 0;



// addTodo function
var addTodo = function() {
  //create a div element and assign it to toDoCol var
  var todoCol = document.createElement('div');
  //give it a class of col-xs-12 and todo.
  todoCol.setAttribute('class', 'col-xs-12 todo');

  //create another div element and assign it to todoRow var
  var todoRow = document.createElement('div');
  //give it a class of row
  todoRow.setAttribute('class', 'row');

  // create a button element and assign it to removeButton var
  var removeButton = document.createElement('button');
  // set class attribute of removeButton to style it and name it
  removeButton.setAttribute('class', 'btn btn-danger remove-button');
  
  // add the string 'remove' into the innerHTML of removeButton
  removeButton.innerHTML = 'REMOVE';

  // define the event listener for click so that this todoCol element
  // will be removed when the user clicks removeButton
  removeButton.onclick = function() {
    // we use 'this' to point to the remove button element.
    var child = this.parentNode.parentNode;

    // Use removeChild to delete child from todo-list
    todoList.removeChild(child);

    // subtract 1 from todoCount
    todoCount--;
  
  }

  //create an h5 element and assign it to the h5 variable.
  var h5 = document.createElement('h5');

  //set the class attribute of h5 to take up 8 col
  h5.setAttribute('class', 'col-xs-8');

  //assign the value of todoInput, which is the text 
  //the user typed into the input element, to the inner
  //HTML property of h5.

  h5.innerHTML = todoInput.value

  // addh5 as the last child element to the todoRow element.
  todoRow.appendChild(h5);

  // add removeButton as the last child element to todoRow
  todoRow.appendChild(removeButton);

  //add todoRow as the last child element to the todoCol element
  todoCol.appendChild(todoRow);

  // append todoCol as the last child element to the todoList div

  todoList.appendChild(todoCol);

}

// This handler will execute when the addButton is clicked.

var checkThenAddTodo = function () {

  // First we make sure that there is less than 10 to-dos,
  // and some value exists in the input element.

  if (todoCount < 10 && todoInput.value !== '') {

    // Executes the addTodo function we defined earlier.
    addTodo();

    // Add 1 to todoCount.
    todoCount++;

    // Clear the input element by setting it to empty string.
    todoInput.value = '';
  }
};

addButton.addEventListener('click', checkThenAddTodo);

todoInput.addEventListener('keyup', function (event) {
  if (event.key === "Enter") {
    checkThenAddTodo();
  }
});


// DOMContentLoaded closing
});