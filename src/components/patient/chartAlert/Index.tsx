import  { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Index.css";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
const Patient = () => {
  const params = useParams()
  const endPoint: string = `https://api.preview.platform.athenahealth.com/v1/195900/patients/${params?.id}`
  const getAPI = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer aGBZSWnB7EtmRTWr4ciytYzsrMRi'
    }
    try {
      const response = await axios.get(endPoint, {
        headers: headers
      })
      setPatient(response.data[0])
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAPI()
    console.log(patient)
  }, [])
  const [patient, setPatient] = useState({
    firstname: "",
    dob: "",
    Gender: "",
    ah_practice: "",
    Security: "",
    Id: "",
    Identifier: "",
    Family: "",
    Given: "",
    "Last Updated": "",
    ah_brand: "",
    "ah_chart-sharing-group": "",
    ah_department: "",
    ah_provider_group: "",
    _Count: "",
    Cursor: "",
    _include: "",
    Revinclude: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    console.log("Patient Data:", patient);
  };

  useEffect(() => {

  }, [])
  return (
    <>
      <div className="row m-0 text-center mb-0 mt-1 p-0">
        <h2 style={{ color: "darkcyan" }}>Patient Registration Form</h2>
      </div>
      <div className="d-flex justify-content-center mb-3 m-1 p-0">
        <hr className="hr" style={{ width: "30%" }} />
      </div>
      <div className="FormContainer">
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <Form.Group className="FormGroup" controlId="Name">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="Name"
                  value={patient.firstname}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                  
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="dob">
                <TextField
                  id="outlined-basic-2"
                  label="dob"
                  variant="outlined"
                  type="text"
                  name="dob"
                  value={patient.dob}
                  onChange={handleChange}
                  placeholder="Select dob"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="Gender">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={patient.Gender}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="ah_practice">
                <TextField
                  id="outlined-basic-3"
                  label="ah_practice"
                  variant="outlined"
                  type="text"
                  name="ah_practice"
                  value={patient.ah_practice}
                  onChange={handleChange}
                  placeholder="Enter practice"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="Id">
                <TextField
                  id="outlined-basic-4"
                  label="Id"
                  variant="outlined"
                  type="text"
                  name="Id"
                  value={patient.Id}
                  onChange={handleChange}
                  placeholder="Enter ID"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="Identifier">
                <TextField
                  id="outlined-basic-5"
                  label="Identifier"
                  variant="outlined"
                  type="text"
                  name="Identifier"
                  value={patient.Identifier}
                  onChange={handleChange}
                  placeholder="Enter identifier"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="Family">
                <TextField
                  id="outlined-basic-6"
                  label="Family"
                  variant="outlined"
                  type="text"
                  name="Family"
                  value={patient.Family}
                  onChange={handleChange}
                  placeholder="Enter family"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="Given">
                <TextField
                  id="outlined-basic-7"
                  label="Given"
                  variant="outlined"
                  type="text"
                  name="Given"
                  value={patient.Given}
                  onChange={handleChange}
                  placeholder="Enter given"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="LastUpdated">
                <TextField
                  id="outlined-basic-8"
                  label="LastUpdated"
                  variant="outlined"
                  type="text"
                  name="Last Updated"
                  value={patient["Last Updated"]}
                  onChange={handleChange}
                  placeholder="Enter last updated"
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="ah_brand">
                <TextField
                  id="outlined-basic-9"
                  label="ah_Brand"
                  variant="outlined"
                  type="text"
                  name="ah_brand"
                  value={patient.ah_brand}
                  onChange={handleChange}
                  placeholder="Enter brand"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group
                className="FormGroup"
                controlId="ah_chart-sharing-group"
              >
                <TextField
                  id="outlined-basic-10"
                  label="ah_chart-sharing-group"
                  variant="outlined"
                  type="text"
                  name="ah_chart-sharing-group"
                  value={patient["ah_chart-sharing-group"]}
                  onChange={handleChange}
                  placeholder="Enter chart sharing group"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="ah_department">
                <TextField
                  id="outlined-basic-11"
                  label="ah_department"
                  variant="outlined"
                  type="text"
                  name="ah_department"
                  value={patient.ah_department}
                  onChange={handleChange}
                  placeholder="Enter department"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="ah_provider_group">
                <TextField
                  id="outlined-basic-12"
                  label="ah_provider_group"
                  variant="outlined"
                  type="text"
                  name="ah_provider_group"
                  value={patient.ah_provider_group}
                  onChange={handleChange}
                  placeholder="Enter provider group"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="_Count">
                <TextField
                  id="outlined-basic-13"
                  label="_Count"
                  variant="outlined"
                  type="text"
                  name="_Count"
                  value={patient._Count}
                  onChange={handleChange}
                  placeholder="Enter _Count"
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="FormGroup" controlId="Cursor">
                <TextField
                  id="outlined-basic-14"
                  label="Cursor"
                  variant="outlined"
                  type="text"
                  name="Cursor"
                  value={patient.Cursor}
                  onChange={handleChange}
                  placeholder="Enter Cursor"
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Form.Group className="FormGroup" controlId="_include">
                <TextField
                  id="outlined-basic-15"
                  label="_include"
                  variant="outlined"
                  type="text"
                  name="_include"
                  value={patient._include}
                  onChange={handleChange}
                  placeholder="Enter _include"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="FormGroup" controlId="Revinclude">
                <TextField
                  id="outlined-basic-16"
                  label="Revinclude"
                  variant="outlined"
                  type="text"
                  name="Revinclude"
                  value={patient.Revinclude}
                  onChange={handleChange}
                  placeholder="Enter Revinclude"
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-end">
              <Button className="SubmitButton" variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Patient;