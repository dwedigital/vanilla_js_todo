let userInput = document.querySelector("input");
const submit = document.querySelector("button");
const list = document.querySelector("ul");

function addEntry() {
  // !!! this is needed to stop the page reloading as a deafult behaviour of form submit
  event.preventDefault();
  if (userInput.value.length === 0) {
    return;
  } else {

    // list item
    const item = document.createElement("li");
    const span = document.createElement('span')
    item.appendChild(span);
    span.appendChild(document.createTextNode(userInput.value))
    list.appendChild(item);

    // create button
    const button = document.createElement("button");
    button.setAttribute("class", "js--delete-item btn btn-link");
    button.innerHTML = "Delete";
    item.appendChild(button);

    // add event listener to button and clear form field
    button.addEventListener("click",Delete);
    userInput.value = "";
  }
}

function Delete() {
      const parent = event.target.parentNode;
      parent.classList.toggle("deleted_item")
      const text = parent.querySelector('span')
      text.classList.toggle("deleted_text");
      buttonText(this);

}

function buttonText(button) {
  if (button.innerHTML === "Delete") {
    button.innerHTML = "Undo";
  } else {
    button.innerHTML = "Delete";
  }
}

document.querySelectorAll(".js--delete-item").forEach(item => item.addEventListener("click", Delete))

submit.addEventListener("click", addEntry);
