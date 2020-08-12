import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Login.css';

function Login() {
    return (
      <section>
        <MuiThemeProvider>
            <AppBar
                title="Login"
            />
            <fieldset class="login-field">
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
            </fieldset>
            <fieldset class="login-field">
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
            </fieldset>
            <RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
         </MuiThemeProvider>     
      </section>
    );
}

export default Login;