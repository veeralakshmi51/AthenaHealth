import  { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  const [practiceId, setPracticeId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const handleDelete = () => {
    navigate(-1);
  };
  const deleteChartAlert = () => {
    // Make API call using fetch for deleting chart alert
    fetch(
      `https://api.preview.platform.athenahealth.com/v1/${practiceId}/patients/${patientId}/chartalert?departmentid=${departmentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          // Handle the successful deletion
          alert("Chart alert deleted successfully!");
        } else {
          // Handle errors
          console.error("Error:", response.statusText);
          alert(
            "Error deleting chart alert. Please check the console for details."
          );
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        alert(
          "Error deleting chart alert. Please check the console for details."
        );
      });
  };

  return (
    <Container>
      <h2>Delete Patient Chart Alert</h2>
      <Form>
        <FormGroup>
          <Label for="practiceId">Practice ID:</Label>
          <Input
            type="text"
            id="practiceId"
            placeholder="Enter Practice ID"
            value={practiceId}
            onChange={(e:any) => setPracticeId(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="patientId">Patient ID:</Label>
          <Input
            type="text"
            id="patientId"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e:any) => setPatientId(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="departmentId">Department ID:</Label>
          <Input
            type="text"
            id="departmentId"
            placeholder="Enter Department ID"
            value={departmentId}
            onChange={(e:any) => setDepartmentId(e.target.value)}
            required
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button type="button" color="danger" onClick={deleteChartAlert}>
            Delete Chart Alert
          </Button>
          <button
            type="button"
            color="secondary"
            onClick={handleDelete}
          >Back</button>
        </div>
      </Form>
    </Container>
  );
};

export default Delete;