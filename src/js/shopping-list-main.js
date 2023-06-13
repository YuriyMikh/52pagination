import book322_1 from '../images/shopping/books_322_@1.webp';
import book322_2 from '../images/shopping/books_322_@2.webp';
import book322_11 from '../images/shopping/books_322_@1.png';
import book322_22 from '../images/shopping/books_322_@2.png';
import book265_1 from '../images/shopping/books_265_@1.webp';
import book265_2 from '../images/shopping/books_265_@2.webp';
import book265_11 from '../images/shopping/books_265_@1.png';
import book265_22 from '../images/shopping/books_265_@2.png';

import Storage from './local-storage';
import getShoppingCartMarkup from './shopping-cart';
import { countBook } from './templates/shoppingListCounter';

import { SwaggerAPI } from './swagger-api.js';

//----------------------
import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
const paginationContainerRef = document.querySelector('.js-tui-pagination');
let currentPage = 1;
let itemsPerPageDesktop = 3;
let itemsPerPageMobile = 4;
//----------------------

const booksApi = new SwaggerAPI();

const listContainer = document.querySelector('.js-shopping-list');

const bookStorage = Storage.load('bookList');

//-----
listContainer.addEventListener('click', deleteCard);
//-----

start();
function start() {
  if (!bookStorage || bookStorage.length === 0) {
    listContainer.innerHTML = emptyShoppingMarkup();
    return;
  }

  const totalItems = bookStorage.length;
  createMarkup(bookStorage, currentPage);

  if (totalItems > itemsPerPageDesktop) {
    paginationStart(totalItems);
  }
}

function deleteCard() {
  if (bookStorage) {
    const deleteCardItem = document.querySelectorAll('.shop-cart-btn');

    deleteCardItem.forEach(btn => {
      console.log(9);
      btn.addEventListener('click', e => {
        console.log(3);
        if (
          e.target.nodeName === 'BUTTON' ||
          e.target.nodeName === 'svg' ||
          e.target.nodeName === 'use'
        ) {
          console.log(4);
          const deleteBookIndex = bookStorage.indexOf(
            bookStorage.find(
              book => book.title === e.currentTarget.dataset.title
            )
          );
          if (deleteBookIndex < 0) {
            return;
          }
          bookStorage.splice(deleteBookIndex, 1);
          Storage.save('bookList', bookStorage);
          e.target.closest('li').remove();
          //-------------

          createMarkup(bookStorage, currentPage);
          if (bookStorage.length <= itemsPerPageDesktop) {
            paginationContainerRef.classList.add('is-hidden');
          }

          //-------------
          if (bookStorage.length === 0) {
            listContainer.innerHTML = emptyShoppingMarkup();
            Storage.remove('bookList');
          }
          countBook();
          return;
        }
      }); //end of click
    }); // end forEach
  } else {
    listContainer.innerHTML = emptyShoppingMarkup();
  }
}

// function deleteCard(e) {
//   if (
//     e.target.nodeName === 'BUTTON' ||
//     e.target.nodeName === 'svg' ||
//     e.target.nodeName === 'use'
//   ) {
//     const deleteBookIndex = bookStorage.indexOf(
//       bookStorage.find(book => book.title === e.currentTarget.dataset.title)
//     );
//     console.log(deleteBookIndex);
//     if (deleteBookIndex < 0) {
//       return;
//     }
//     bookStorage.splice(deleteBookIndex, 1);
//     Storage.save('bookList', bookStorage);
//     e.target.closest('li').remove();
//   }

// if (bookStorage) {
//   console.log(2);
//   const deleteCardItem = document.querySelectorAll('.shop-cart-btn');

//   deleteCardItem.forEach(btn => {
//     console.log(9);
//     btn.addEventListener('click', e => {
//       console.log(3);
//       if (
//         e.target.nodeName === 'BUTTON' ||
//         e.target.nodeName === 'svg' ||
//         e.target.nodeName === 'use'
//       ) {
//         console.log(4);
//         const deleteBookIndex = bookStorage.indexOf(
//           bookStorage.find(
//             book => book.title === e.currentTarget.dataset.title
//           )
//         );
//         if (deleteBookIndex < 0) {
//           return;
//         }
//         bookStorage.splice(deleteBookIndex, 1);
//         Storage.save('bookList', bookStorage);
//         e.target.closest('li').remove();
//         //-------------

//         createMarkup(bookStorage, currentPage);
//         if (bookStorage.length <= itemsPerPageDesktop) {
//           paginationContainerRef.classList.add('is-hidden');
//         }

//         //-------------
//         if (bookStorage.length === 0) {
//           listContainer.innerHTML = emptyShoppingMarkup();
//           Storage.remove('bookList');
//         }
//         countBook();
//         return;
//       }
//     }); //end of click
//   }); // end forEach
// } else {
//   listContainer.innerHTML = emptyShoppingMarkup();
// }
// }

// if (bookStorage) {
//   const deleteCardItem = document.querySelectorAll('.shop-cart-btn');

//   deleteCardItem.forEach(btn => {
//     btn.addEventListener('click', e => {
//       if (
//         e.target.nodeName === 'BUTTON' ||
//         e.target.nodeName === 'svg' ||
//         e.target.nodeName === 'use'
//       ) {
//         const deleteBookIndex = bookStorage.indexOf(
//           bookStorage.find(
//             book => book.title === e.currentTarget.dataset.title
//           )
//         );

//         if (deleteBookIndex < 0) {
//           return;
//         }

//         bookStorage.splice(deleteBookIndex, 1);

//         Storage.save('bookList', bookStorage);

//         e.target.closest('li').remove();

//         //-------------
//         Storage.load('bookList')
//         console.log(Storage.load('bookList'));
//         createMarkup(bookStorage, currentPage);
//         //-------------

//         if (bookStorage.length === 0) {
//           listContainer.innerHTML = emptyShoppingMarkup();
//           Storage.remove('bookList');
//         }
//         countBook();
//         return;
//       }
//     }); //end of click
//   }); // end forEach
// } else {
//   listContainer.innerHTML = emptyShoppingMarkup();
// }

function emptyShoppingMarkup() {
  return `
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
        <picture>
            <source media="(min-width: 768px)" srcset="
                            ${book322_1} 1x,
                            ${book322_2} 2x
                            " type="image/webp" />
            <source media="(min-width: 768px)" srcset="
                            ${book322_11} 1x,
                            ${book322_22} 2x
                            " type="image/png" />

            <source media="(max-width: 767px)" srcset="
                            ${book265_1} 1x,
                            ${book265_2} 2x
                            " type="image/webp" />
            <source media="(max-width: 767px)" srcset="
                            ${book265_11} 1x,
                            ${book265_22} 2x
                            " type="image/png" />

            <img class="shopping-list-image" src="${book265_1}" alt="Books" loading="lazy" />
        </picture>
    `;
}

function createMarkup(arrayData, page) {
  const startIndex = itemsPerPageDesktop * page - itemsPerPageDesktop;
  const endIndex = itemsPerPageDesktop * currentPage;
  getShoppingCartMarkup(arrayData.slice(startIndex, endIndex));
}

function paginationStart(totalItems) {
  const paginationOptions = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPageDesktop,
    visiblePages: Math.ceil(totalItems / itemsPerPageDesktop),
    page: currentPage,
  };

  const pagination = new Pagination(paginationContainerRef, paginationOptions);

  pagination.on('beforeMove', event => {
    currentPage = event.page;
    createMarkup(bookStorage, currentPage);
  });
}
