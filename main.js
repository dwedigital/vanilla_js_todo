let userInput = document.querySelector("input");
const submit = document.querySelector("button");
const list = document.querySelector("ul");

function addEntry() {
  // !!! this is needed to stop the page reloading as a deafult behaviour of form submit
  event.preventDefault();
  if (userInput.value.length === 0) {
    return;
  } else {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(userInput.value));
    list.appendChild(item);

    const button = document.createElement("button");
    button.setAttribute("class", "js--delete-item btn btn-link");
    button.innerHTML = "Delete";
    item.appendChild(button);
    userInput.value = "";

    button.addEventListener("click", () => {
      var parent = event.target.parentNode;
      parent.classList.toggle("delete");
      buttonText(button);
    });
  }
}

function addDelete() {
  document.querySelectorAll(".js--delete-item").forEach(item => {
    item.addEventListener("click", event => {
      const parent = event.target.parentNode;
      parent.classList.toggle("delete");
      buttonText(item);
    });
  });
}

function buttonText(button) {
  if (button.innerHTML === "Delete") {
    button.innerHTML = "Undo";
  } else {
    button.innerHTML = "Delete";
  }
}

addDelete();
submit.addEventListener("click", addEntry);
