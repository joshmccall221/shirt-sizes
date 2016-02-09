import React from 'react';
import {connect} from 'react-redux';
import Prospectsource from '../components/Prospectsource.js';





var test = 
[
    {
        "id": 1388534400000,
        "author": "Bobby Joe",
        "text": "Hey there!"
    },
    {
        "id": 1420070400000,
        "author": "Billy Joe",
        "text": "React is *great*!"
    },
    {
        "id": 3456666,
        "author": "Jane Joe",
        "text" : "sup yo?"
    }
];




export class Prospect extends React.Component {
  componentDidMount(){
    // Initial Shirt Fetch!
    this.props.dispatch(fetchShirts(this.props.selectedSize));
  }
  render(){
    return  (
      <div>
        <h1>Yoooooooooo I am here!!!!!!!!!!!!!!</h1>
        <Prospectsource prospects={test} />
      </div>
    )
  }
}

Prospect.defaultProps = {
  dispatch : function(){}  //noop
}

function select(state){
  return state;
}

export default connect(select)(Prospect);
