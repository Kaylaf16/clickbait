import React, { Component } from 'react';

class PurpleContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {divStyle} = styles
    return(
      <div style={divStyle}>
        <p>hi</p>
      </div>
    )
  }
}
const styles = {
  divStyle:{
    color:'red'
  }
}
export {PurpleContainer}
