// Q3: Library Management System

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) return false; // already issued
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false; // issued hi nahi tha
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("Clean Code", "Robert Martin", "111"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "222"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "333"),
  new Book("You Don't Know JS", "Kyle Simpson", "444"),
];

const availableList = document.getElementById("availableList");
const issuedList = document.getElementById("issuedList");
const message = document.getElementById("message");
const isbnInput = document.getElementById("isbnInput");

// Dono lists dobara draw karta hai
function render() {
  availableList.innerHTML = "";
  issuedList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
    (book.isIssued ? issuedList : availableList).appendChild(li);
  });

  if (!issuedList.children.length) issuedList.innerHTML = "<li>Koi book issue nahi hai</li>";
  if (!availableList.children.length) availableList.innerHTML = "<li>Koi book available nahi hai</li>";
}

function showMessage(text, ok) {
  message.textContent = text;
  message.className = ok ? "ok" : "bad";
}

// ISBN se book dhoondhta hai
function findBook() {
  const isbn = isbnInput.value.trim();
  return books.find((b) => b.isbn === isbn);
}

document.getElementById("issueBtn").addEventListener("click", () => {
  const book = findBook();
  if (!book) return showMessage("Is ISBN ki koi book nahi mili", false);
  if (book.issueBook()) showMessage(`"${book.title}" issue ho gayi ✅`, true);
  else showMessage(`"${book.title}" pehle se issued hai`, false);
  render();
});

document.getElementById("returnBtn").addEventListener("click", () => {
  const book = findBook();
  if (!book) return showMessage("Is ISBN ki koi book nahi mili", false);
  if (book.returnBook()) showMessage(`"${book.title}" return ho gayi ✅`, true);
  else showMessage(`"${book.title}" issued nahi thi`, false);
  render();
});

render();