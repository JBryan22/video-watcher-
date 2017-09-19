import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar'; //dont need .js because it is assumed that it is .js if no extension exists

const API_KEY = 'AIzaSyDBPNlxYDGW6SjQjrBJWiW5FmtRA3PaZTo';

//Create a new component. This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //this is es6 syntax and resolves the exact same way as
      //this.setState({ videos: videos }) Only works with the same variable name as key and value
    });
  }

  render() {
//this.props

    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
  //if we want to use a JS variable in react, we must surround it by curly braces.
  //videos is the the argument that is being passed to VideoList (it is a prop).
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));


//In a functional component, props gets passed as an argument.
//In a class based component, props is available anywhere by using this.props
