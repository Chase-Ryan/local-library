function findAccountById(accounts, id) {
  return accounts.find((act) => act.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((actA, actB) =>
    actA.name.last.toLowerCase() > actB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let count = 0;
  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((elem) => {
      if (elem.id === id) {
        count++;
      }
    });
  }
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let result = [];
  result = books.filter((book) => {
    return book.borrows.some(
      (borrow) => borrow.id === accountId && !borrow.returned
    );
  });
  result = result.map((book) => {
    const author = authors.find((author1) => author1.id === book.authorId);
    const newBook = {
      ...book,
      author,
    };
    return newBook;
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
