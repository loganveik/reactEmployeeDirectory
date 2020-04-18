import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown'

function officeForm(props) {
    return (
        <div className="wrap">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <Card className="my-5 mx-1 text-center">
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicText">
                                    <Form.Label >Search character from list</Form.Label>
                                    <Form.Control value={props.charSearch} onChange={event => { props.onChange(event); props.searchFilter(event) }} type="text" placeholder="e.g. 'Michael Scott'" />
                                </Form.Group>
                                <Button className="my-2" variant="danger" type="submit">
                                ← Back to List
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="my-5 mx-1 text-center">
                        <Card.Body>
                            <Button className="my-2" variant="success" type="submit">
                                Sort by Alphabetical Order
                            </Button>

                            <Dropdown className="my-3">
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    Filter by Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={props.salesFilter} >Sales</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Accounting</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Corporate</Dropdown.Item>
                                    <Dropdown.Item onClick={props.managerFilter}>Manager</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default officeForm;
