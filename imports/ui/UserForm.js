import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

import React, { Component } from 'react';

export default class UserForm extends Component {
       state = {
              login: true
       }
       render() {
              const { user, client } = this.props;
              const { login } = this.state;
              if (user._id) {
                     return(
                            <button 
                                   onClick={() => {
                                          Meteor.logout();
                                          client.resetStore;
                                   }}
                            >
                            Logout
                            </button>
                     )
              }
              return (      
                            <div>
                                   {this.state.login ? (
                                          <LoginForm client={client} />
                                   ) : (
                                          <RegisterForm client={client} />
                                   )}
                                   <button onClick={() => this.setState({login: !login})}>
                                          {login ? 'Register': 'Login'}
                                   </button>
                            </div>
              )
       }
};


