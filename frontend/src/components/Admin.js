import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Table from 'material-ui/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableRow from 'material-ui/Table/TableRow';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableBody from 'material-ui/Table/TableBody';

function Admin(props) {
    const rows = [];
    for (let i = 0; i < 10; i += 1) {
        rows.push({
            firstName: "Victor",
            lastName: "Rios",
            telephoneNumber: "555-2323992",
            fullAddress: "lorem ipsum",
            ssn: "13"
        });
    }
    return (
        <MuiThemeProvider>
            <AppBar title="Admin dashboard" />
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
                    {rows.map((row) => (
                        <TableRow key={row.name}>
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