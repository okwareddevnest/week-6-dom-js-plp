// 1. Select Elements
const title = document.getElementById("headTitle");
const describe = document.getElementById("description");

//2. Change text content directly
title.textContent = "New Title PLP"
describe.textContent = "This is the new deal"

//3. change an attribute
title.setAttribute("class", "big-text");

//4. change style directly
describe.style.color = "white";
describe.style.backgroundColor = "green"

//5. Add a class
title.classList.add("highlight-color");