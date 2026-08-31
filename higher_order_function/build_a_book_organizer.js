/*
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have an array of objects named books where each object in the array should have a string title, 
another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array 
and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. 
You learned in a prior lesson that the sort() method will sort the array in place. 
This means the filteredBooks array will be mutated.
 */

const books = [
  {
    title: "Dream don't come true sometimes",
    authorName: "Laurent Partu",
    releaseYear: 2026,
  },
  {
    title: "Everything will be fine by God's grace",
    authorName: "Freeman Toghason",
    releaseYear: 1950,
  },
  {
    title:
      "Sometimes things don't work out as planned but with God all his plans for my life will come through",
    authorName: "Kwame Laurent",
    releaseYear: 1900,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}
// const year = 1950;
const filteredBooks = books.filter((book) => book.releaseYear <= 1950);
// console.log(filteredBooks)
filteredBooks.sort(sortByYear);