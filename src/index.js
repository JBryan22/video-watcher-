import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar'; //dont need .js because it is assumed that it is .js if no extension exists
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDBPNlxYDGW6SjQjrBJWiW5FmtRA3PaZTo';

//Create a new component. This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) { //function that takes a value and searches youtube for that term
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this is es6 syntax and resolves the exact same way as
      //this.setState({ videos: videos }) Only works with the same variable name as key and value
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/> //passes the onSearchTermChange function into searchbar component. this function takes a term that will be determined in searchbar component and passes that term as an argument to videoSearch. Video search changes state, which means the page re-renders
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
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
