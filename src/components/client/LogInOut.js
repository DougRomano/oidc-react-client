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
      <a href={this.props.uri + path}>{message}</a>
    );
  }
}
