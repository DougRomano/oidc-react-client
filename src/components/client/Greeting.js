import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //let message = (this.props.body.token)
    //  ? `Hi, ${this.props.body.token.email}!`
    //  : "You're not logged in.";
    let message = "You're not logged in";
    return (
      <div>
         <span>{message}</span> 
      </div>
    );
  }
}
