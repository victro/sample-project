import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './UserProfile.css';
import axios from 'axios';

function UserProfile(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [dataRegistered, setDataRegistered] = useState(false);

    const registerData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users/create', {
            firstName,
            lastName,
            telephoneNumber,
            fullAddress,
            ssn
        })
            .then((res) => {
                console.log('THE RESPONSE REGISTER')
                console.log(res)
                setDataRegistered(true);
            })
            .catch((err) => {
                console.log('ERROR WHILE REGISTERING');
                console.log(err)
            })
    };

    return (
        <MuiThemeProvider>
            <AppBar title="Register"/>
            {
                dataRegistered ? 
                <section className="thank-you">
                    <p>Thanks for registering!</p>
                    <fieldset>
                        <RaisedButton label="< Go Back" primary={true} onClick={() => props.history.push('/')}/>
                    </fieldset>
                </section>
            :
                <form className="my-profile-form" onSubmit={registerData}>
                    <fieldset>
                        <TextField
                            hintText="First Name"
                            floatingLabelText="First Name"
                            onChange = {e => setFirstName(e.target.value)}
                            />
                    </fieldset>
                    <fieldset>
                        <TextField
                            hintText="Last Name"
                            floatingLabelText="Last Name"
                            onChange = {e => setLastName(e.target.value)}
                            />
                    </fieldset>
                    <fieldset>
                        <TextField
                            //type="number"
                            hintText="Telephone Number"
                            floatingLabelText="Telephone Number"
                            onChange = {e => setTelephoneNumber(e.target.value)}
                            />
                    </fieldset>
                    <fieldset>
                        <TextField
                            hintText="Full Address"
                            floatingLabelText="Full Address"
                            onChange = {e => setFullAddress(e.target.value)}
                            />
                    </fieldset>
                    <fieldset>
                        <TextField
                            //type="number"
                            hintText="Social Security Number"
                            floatingLabelText="Social Security Number"
                            onChange = {e => setSsn(e.target.value)}
                            />
                    </fieldset>
                    <RaisedButton label="Register data" primary={true} type="submit"/>
                </form>
            }
        </MuiThemeProvider>
    );
}

export default UserProfile;