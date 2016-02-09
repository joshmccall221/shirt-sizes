import React from 'react';
import {connect} from 'react-redux';
import Prospectsource from '../components/Prospectsource.js';
var test = [' Bobby Joe ',' Billy Joe ',' Jane Joe'];

export class Prospect extends React.Component {
  componentDidMount(){
    // Initial Shirt Fetch!
    this.props.dispatch(fetchShirts(this.props.selectedSize));
  }
  render(){
    return  (
      <div>
        <h1>Yoooooooooo I am here!!!!!!!!!!!!!!</h1>
        <h2>{test}</h2>
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
