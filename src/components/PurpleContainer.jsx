import React, { Component } from 'react';

class PurpleContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {divStyle} = styles
    return(
      <div style={divStyle}>

      </div>
    )
  }
}
const styles = {
  divStyle:{
    backgroundImage:'linear-gradient(180deg, #6200EE 0%, rgba(98, 0, 238, 0.39) 71.88%, rgba(98, 0, 238, 0) 100%)',
    height:'100vh',
    width: '70%',
    boxShadow: '0 10px 15px 10px linear-gradient(180deg, #6200EE 0%, rgba(98, 0, 238, 0.39) 71.88%, rgba(98, 0, 238, 0) 100%)'
  }
}
export {PurpleContainer}
