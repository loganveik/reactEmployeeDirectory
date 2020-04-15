import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table';



function officeTable(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Location</th>
                        <th>Character Type</th>
                    </tr>
                </thead>
                {props.characters.map(char => (
                    <tbody>
                        <tr key={char.id}>
                            <td>{char.name}</td>
                            <td>{char.department}</td>
                            <td>{char.location}</td>
                            <td>{char.chartype}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
}

export default officeTable;
