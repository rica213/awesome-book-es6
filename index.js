import bookList from './modules/books.js';
import * as bookElements from './modules/bookElements.js';
import { DateTime } from './modules/luxon.js';

const addBook = document.querySelector('.add-btn');
addBook.addEventListener('click', (e) => {
  if (bookElements.newTitle.value === '' || bookElements.newAuthor.value === '') {
    e.preventDefault();
  } else {
    bookList.add();
  }
});

window.addEventListener('load', () => {
  bookList.retrieve();
  bookList.createBookList();
});

bookElements.booksContainer.addEventListener('click', (e) => {
  bookList.remove(e.target);
});

bookElements.dateTime.innerHTML = DateTime.now();
