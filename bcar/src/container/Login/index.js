import React from 'react';
import LoginContainer from './LoginContainer';
import styles from './style';
export default class Login extends React.PureComponent {
  render() {
      return <LoginContainer {...this.props} />
  }
}