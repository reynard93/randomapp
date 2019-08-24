This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

etc, etc, all the same as a normal CRA readme

### Steps 
  >> json-server --watch -p 4000 example.json
  >>> npm run start

### HOW IT WORKS

Bootstrap is used for styling.

HomePage consists of a full page image and a single button to proceed.

After clicking enter, there will be two extra pages to visit each of which have a navigation bar.

The first page displays the example.json in a table with filtering and sorting capabilities, press the respective table header to toggle between ascending and descending sort for either the id or the title. title is unsorted at first, on first toggle sort by descending.

The second page displays a div with default text which can be replaced with a custom text through the input box above.

Think all the requirements are hit. 
Improvements: 
more styling can be done and sort by date too through date parsing. 
