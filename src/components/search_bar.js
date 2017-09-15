import React, { Component } from 'react'; // , { component } means it takes react, then pulls off the component class and assigns it to a const named Component.
//const Component = React.Component;

class SearchBar extends Component{ //extends means it can use that class and its functions within this class

  constructor(props) { //functional components do not have state - only class based components do
    super(props); //comes from component. component has its own constructor function.

    this.state = { term: '' }; //state is a javascript object that exists on any class based component. each instance of a component has its own copy of state. we initialize the state by using this.state. term could be named something else if wished. this is the only time changing state happens this way (this.state = {}) use this.setState for all future state changes
  }
//whenever we change the state of a class it causes the instance of that component to get re-rendered. this how the updated state shows on our page
  render() { //all React classes need a render() function. this is what gets returned to be placed on the DOM. must return jsx
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    ); //onChange is a react property. It triggers on every change. React has documentation for other properties.
    //event is a function that uses es6 notation. it doesnt need to be wrapped () because it is a one line solution.
    //event.target.value is a property of the event. try console.logging just the event and you will see an object that contains target. within target is the value
  }

  // onInputChange(event) {      ---- we are removing this function and placing it into the return statement in render. We do this because it is such a simple function that it can be placed within the onChange property. ----
  //   console.log(event.target.value);
  // }
}

export default SearchBar; //allows other files to import searchbar class
