This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Steps 
  >> json-server --watch -p 4000 example.json
  >>> npm run start

### HOW IT WORKS

Bootstrap is used for styling.

HomePage consists of a full page image and a single button to proceed.

After clicking enter, there will be two extra pages to visit each of which have a navigation bar.

The first page displays the example.json in a table with filtering and sorting capabilities, press the respective table header to toggle between ascending and descending sort for either the id or the title. title is unsorted at first, on first toggle sort by descending.

The second page displays a div with default text which can be replaced with a custom text through the input box above.

Improvements:

Loader / Pagination / Tooltip (for sort) / Refactoring / Focus / Aria

Actually did an app similar to this before using goodreads api.
https://www.youtube.com/watch?v=E8wSB8Pn_Xs&feature=youtu.be 
flask goodreads api skip to 0:38

https://medium.com/@agoiabeladeyemi/pagination-in-reactjs-36f4a6a6eb43

https://stackoverflow.com/questions/25566307/searching-algorithm-with-complexity-olog-n-unsorted-list-array
