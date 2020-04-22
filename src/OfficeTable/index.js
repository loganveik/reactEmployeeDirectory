import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table';



function officeTable(props) {
    return (
                    <Table striped bordered hover>
                        <thead className="text-center w-auto">
                            <tr>
                                <th>The Office Character</th>
                                <th>Name</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        {props.filteredCharacters.map(char => (
                            <tbody key={char.id} className="text-center">
                                <tr>
                                    <td>
                                        <img alt={char.name} className="officeImage" src={char.image} />
                                    </td>
                                    <td>
                                        <h5>{char.name}</h5>
                                    </td>
                                    <td>
                                        <h5>{char.department}</h5>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>

    );
}

export default officeTable;
