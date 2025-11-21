// var divEl = document.getElementById("container");
// console.log(divEl);

// var h2El = document.createElement("h2");
// var h2Content = document.createTextNode('Element using JS');
// h2El.appendChild(h2Content);
// // console.log(h2El);
// divEl.appendChild(h2El);












var ulEl = document.getElementById("ul");
var todoInputEl = document.getElementById("todo-input");

function addItem() {
    // console.log(todoInputEl.value);

    var liEl = document.createElement('li');
    var buttonEl = document.createElement('button');

    var createId = new Date().getTime() + (Math.random() * 4 + 1)
    console.log(createId);

    var liContent = document.createTextNode(todoInputEl.value);
    var btnText = document.createTextNode('Delete Item');

    buttonEl.setAttribute('onclick', 'deletItem()');

    buttonEl.appendChild(btnText);
    liEl.appendChild(liContent);
    liEl.appendChild(buttonEl);
    ulEl.appendChild(liEl);

    todoInputEl.value = "";
    todoInputEl.focus();
};

function deletItem() {
    console.log('Item deleted sucessfully');
};



// var ulEl = document.getElementById("ul");
// var targetEl = document.getElementById("about");

// ulEl.removeChild(targetEl);