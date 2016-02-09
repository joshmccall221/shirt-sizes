import React from 'react';
import ReactCSSTransition from 'react-addons-css-transition-group';

class Prospectsource extends React.Component {
  render(){
        var pros = this.props.prospects.map(function(name){
            return (
                <div  key={name.id}>
                {name.author}
                </div>
            );
        });
    return (
        <ul>
          <li>{pros}</li>
        </ul>
    )
  }
}



//export default ChoiceBox
module.exports = Prospectsource
