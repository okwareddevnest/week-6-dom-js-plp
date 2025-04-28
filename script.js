// Step 1: Create a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Step 2: Create a list with multiple items
const list = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  const item = document.createElement("li");
  item.textContent = `Item ${i}`;
  list.appendChild(item);
}

// Step 3: Add new elements to the DOM
const contentDiv = document.getElementById("content");

// Append the new paragraph at the end
contentDiv.appendChild(newParagraph);

// Append the list at the end
contentDiv.appendChild(list);

// Step 4: Remove an element (after some time)
// Let's say we want to remove the first paragraph (created above)
const firstParagraph = contentDiv.querySelector("p");
firstParagraph.remove();  // Modern method to remove an element

