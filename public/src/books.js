function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
let returned = books.filter((book)=> book.borrows[0].returned);
let checkedOut = books.filter((book)=> !book.borrows[0].returned);
let allBooks = [checkedOut, returned];
return allBooks;
}


//Helper function
function findAccountById(accounts, id) {
  return accounts.find((act) => act.id === id);
}

function getBorrowersForBook(book, accounts) {
  let acts = book.borrows;
  let result = acts.map((act) => {
    //calling helper function
    const accInfo = findAccountById(accounts,act.id);
    const newAct = {
      ...act,
      ...accInfo,
    };
    return newAct;
  });
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
