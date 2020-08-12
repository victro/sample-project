import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './UserProfile.css';

function UserProfile(props) {
    return (
        <MuiThemeProvider>
            <AppBar title="My profile"/>
            <form className="my-profile-form">
                <fieldset>
                    <TextField
                        hintText="First Name"
                        floatingLabelText="First Name"
                        onChange = {() => {}}
                        />
                </fieldset>
                <fieldset>
                    <TextField
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        onChange = {() => {}}
                        />
                </fieldset>
                <fieldset>
                    <TextField
                        //type="number"
                        hintText="Telephone Number"
                        floatingLabelText="Telephone Number"
                        onChange = {() => {}}
                        />
                </fieldset>
                <fieldset>
                    <TextField
                        hintText="Full Address"
                        floatingLabelText="Full Address"
                        onChange = {() => {}}
                        />
                </fieldset>
                <fieldset>
                    <TextField
                        //type="number"
                        hintText="Social Security Number"
                        floatingLabelText="Social Security Number"
                        onChange = {() => {}}
                        />
                </fieldset>
                <RaisedButton label="Login" primary={true}  onClick={() => {}}/>
            </form>
        </MuiThemeProvider>
    );
}

export default UserProfile;