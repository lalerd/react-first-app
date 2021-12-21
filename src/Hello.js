import React, { Component } from 'react';

 class Hello extends Component {
    
  render() {
    const {message}=this.props;
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>{message} <i className="far fa-sun"></i></h1>
        </div>
      </div>
    )
  }
}
export default Hello;