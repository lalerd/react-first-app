import React, { Component } from 'react';

 class Hello extends Component {
    
  render() {
    const {message}=this.props;
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1>{message} <i class="far fa-sun"></i></h1>
        </div>
      </div>
    )
  }
}
export default Hello;