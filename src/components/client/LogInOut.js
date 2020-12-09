import React from 'react';

export default class LogInOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //let message = (this.props.body.token)
    //  ? 'sign out'
    //  : 'sign in';

    //let path = (this.props.body.token)
    //  ? '/logout'
    //  : '/authorize';

    let message = 'sign in';
    let path = '';
    return (
      <div>      
      <a href={this.props.uri + path}>Sign In</a>
      
      <a href="http://localhost:3100/logout?logout_challenge=abcdefghijklmnopqrstuvwxyz">Sign Out</a>
      </div>

    );
  }
}
