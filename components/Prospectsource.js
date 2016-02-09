import React from 'react';
import ReactCSSTransition from 'react-addons-css-transition-group';

class Prospectsource extends React.Component {
  render(){
    return (
      <ul>
          {this.props.prospects}
      </ul>
    )
  }
}



//export default ChoiceBox
module.exports = Prospectsource
