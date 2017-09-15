import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; //dont need .js because it is assumed that it is .js if no extension exists

const API_KEY = 'AIzaSyDBPNlxYDGW6SjQjrBJWiW5FmtRA3PaZTo';

//Create a new component. This component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
