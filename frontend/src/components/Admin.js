import React, { useEffect, useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Table from 'material-ui/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableRow from 'material-ui/Table/TableRow';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableBody from 'material-ui/Table/TableBody';
import { FlatButton } from 'material-ui';
import './Admin.css';
import auth from '../auth/auth';
import axios from 'axios';

function Admin(props) {
    const [rows, setRows] = useState([]);

    const logoutUser = () => {
        auth.logout(() => {
            props.history.push('/login');
        });
    };

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((res) => {
                console.log('THE RESPONSE');
                setRows(res.data.users);
            })
    }, [])
    return (
        <MuiThemeProvider>
            <AppBar title="Admin dashboard">
                <FlatButton className="logout-button" onClick={logoutUser}>Logout</FlatButton>
            </AppBar>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableRowColumn>First Name</TableRowColumn>
                        <TableRowColumn>Last Name</TableRowColumn>
                        <TableRowColumn>Telephone Number</TableRowColumn>
                        <TableRowColumn>Full Address</TableRowColumn>
                        <TableRowColumn>SSN</TableRowColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{row.firstName}</TableRowColumn>
                            <TableRowColumn>{row.lastName}</TableRowColumn>
                            <TableRowColumn>{row.telephoneNumber}</TableRowColumn>
                            <TableRowColumn>{row.fullAddress}</TableRowColumn>
                            <TableRowColumn>{row.ssn}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </MuiThemeProvider>
    );
}

export default Admin;