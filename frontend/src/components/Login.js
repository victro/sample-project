import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import auth from '../auth/auth';
import './Login.css';
import { CircularProgress } from 'material-ui';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loginUser = (e) => {
      setIsLoading(true);
      e.preventDefault();
      axios.post('http://localhost:3000/login', { email, password})
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          auth.login(() => {
            props.history.push('/admin');
          });
        })
        .catch((error) => {
          setLoginError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  
    useEffect(() => {
      console.log('ISSS AUTH???', auth.isAuthenticated())
      if (auth.isAuthenticated()) {
        props.history.push('/admin');
      }
    }, [])
  
    return (
      <section>
        <MuiThemeProvider>
            <AppBar title="Login" showMenuIconButton={false} />
            {
              isLoading && <CircularProgress className="loading"/>
            }
            <form onSubmit={loginUser}>
              <fieldset className="login-field">
                  <TextField
                      hintText="Username"
                      floatingLabelText="Username"
                      onChange = {e => {
                          setLoginError(false);
                          setEmail(e.target.value)
                        }
                      }
                      />
              </fieldset>
              <fieldset className="login-field">
                  <TextField
                      type="password"
                      hintText="Password"
                      floatingLabelText="Password"
                      onChange = {e => {
                          setLoginError(false);
                          setPassword(e.target.value)
                        }
                      }
                      />
              </fieldset>
              {loginError && 
                <div className="login-error">The username or password is incorrect</div>
              }
              <fieldset className="login-field">
                <RaisedButton type="submit" label="Login" primary={true} />
              </fieldset>
              <fieldset className="login-field">
                <p>OR</p>
              </fieldset>
              <fieldset className="login-field">
                <RaisedButton type="submit" label="Register" primary={true} onClick={() => props.history.push('/register')}/>
              </fieldset>
            </form>
        </MuiThemeProvider>     
      </section>
    );
}

export default Login;