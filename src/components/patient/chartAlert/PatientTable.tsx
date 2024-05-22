import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'
import TokenProvider from "../../../token/token";

const PatientTable = () => {
  const [accesstoken,setAccesstoken]=useState<string|null>(null);
  const endPoint: string =
    "https://api.preview.platform.athenahealth.com/v1/195900/patients/search?searchterm=name";
  const [apiData, setApiData] = useState<any>([]);
  const navigate = useNavigate();
  const getAPI = async () => {
    const token=localStorage.getItem('accesstoken');
    setAccesstoken(token);
    const headers = {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    };
    try {
      const response = await axios.get(endPoint, {
        headers: headers,
      });
      setApiData(response.data.patients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <h2 className="text-center mb-4" style={{ color: "darkcyan" }}>
            Patient Record List
          </h2>
          <button
            className="btn btn-dark"
            onClick={() => {
              navigate("/patient-form");
            }}
          >
           <i className="bi bi-plus"></i> Add New Patient 
          </button>
        </div>
      </div>

      <Table responsive bordered className="table">
        <thead className="table-secondary">
          <tr>
            <th className="text-center"> S.No </th>
            <th className="text-center"> First Name </th>
            <th className="text-center">Last Name</th>
            <th className="text-center">DOB</th>
            <th className="text-center">Department</th>
            <th className="text-center">Email</th>
            <th className="text-center">Gurantor Email</th>
            <th className="text-center">SSN</th>
            <th className="text-center">Mobile Phone</th>
            <th className="text-center">Zip Code</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {apiData.length > 0 &&
            apiData?.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <th scope="row" className="text-center">{index + 1}</th>
                  <td className="text-center">{item.firstname ?? "-"}</td>
                  <td className="text-center">{item.lastname ?? "-"}</td>
                  <td className="text-center">{item.dob ?? "-"}</td>
                  <td className="text-center">{item.Department ?? "-"}</td>
                  <td className="text-center">{item.Email ?? "-"}</td>
                  <td className="text-center">{item.GurantorEmail ?? "-"}</td>
                  <td className="text-center">{item.SSN ?? "-"}</td>
                  <td className="text-center">{item.MobilePhone ?? "-"}</td>
                  <td className="text-center">{item.ZipCode ?? "-"}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary"
                      onClick={() => {
                        navigate(`/patient-form/${item.patientid}`);
                      }}
                      ><i className="bi bi-pencil-square "></i></button>
                      <button className="btn btn-danger"><i className="bi bi-trash3-fill "></i></button>
                      <button className="btn btn-success"
                      onClick={() => {
                        navigate(`/patient-chart/${item.patientid}`);
                      }}
                      ><i className="bi bi-folder-plus"></i></button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientTable;
