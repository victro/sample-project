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
            <AppBar title="Login" showMenuIconButton={false}/>
            <fieldset className="login-field">
                <TextField
                    hintText="Username"
                    floatingLabelText="Username"
                    onChange = {() => {}}
                    />
            </fieldset>
            <fieldset className="login-field">
                <TextField
                    type="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    onChange = {() => {}}
                    />
            </fieldset>
            <RaisedButton label="Login" primary={true}  onClick={() => {}}/>
        </MuiThemeProvider>     
      </section>
    );
}

export default Login;