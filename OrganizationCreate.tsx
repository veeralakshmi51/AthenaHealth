import React, { useState } from "react";
import { Form, Row, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import './style.css';

const OrganizationCreate: React.FC = () => {
  const [details, setDetails] = useState({
    orgname: '',
    orgemail: '',
    address1: '',
    address2: '',
    contact: '',
    state: '',
    city: '',
    zip: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({
        
      ...prevDetails,
      [name]: value
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('org details', details);
    alert(`organization name: ${details.orgname} `)
  };

  return (
    <div className="centered-form">
      <Form className="form-container" onSubmit={handleRegister}>
        <h3 style={{ textAlign: 'center', color: 'ActiveCaption', marginBottom: 20 }}>
          Organization Registration Form
        </h3>
        <hr />
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="orgname">Organization Name</Label>
              <Input
                id="orgname"
                name="orgname"
                placeholder="Enter Your Organization Name"
                type="text"
                required
                value={details.orgname}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="orgemail">Organization Email</Label>
              <Input
                id="orgemail"
                name="orgemail"
                placeholder="Enter Your Organization Email"
                type="email"
                required
                value={details.orgemail}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address1">Address 1</Label>
          <Input
            id="address1"
            name="address1"
            placeholder="Please Enter Your Main Address"
            required
            value={details.address1}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address2">Address 2</Label>
          <Input
            id="address2"
            name="address2"
            placeholder="Please Enter Your Secondary Address"
            required
            value={details.address2}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact">Contact Number</Label>
          <Input
            id="contact"
            name="contact"
            placeholder="Contact Number"
            required
            value={details.contact}
            onChange={handleChange}
          />
        </FormGroup>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="Enter Your City"
                value={details.city}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                id="state"
                name="state"
                placeholder="Enter Your State"
                value={details.state}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input
                id="zip"
                name="zip"
                placeholder="Zip"
                value={details.zip}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="info" type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default OrganizationCreate;
