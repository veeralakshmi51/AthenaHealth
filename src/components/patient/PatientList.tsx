import React, { useEffect, useState } from 'react';
import './PatientList.css';
import axios from 'axios';
import Sidebar from '../Sidebar'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TokenProvider from '../../token/token';
const PatientTable: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [accessToken,setAccessToken]=useState<string|null>(null);
 {/*} const [editedPatient, setEditedPatient] = useState({
    firstname:"",
    lastname:'',
    dob:"",
    mobilephone:"",
    sex:"",
    countrycode:""

  });*/}

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem('accesstoken');
        setAccessToken(token) 
        const response = await axios.get('https://api.preview.platform.athenahealth.com/v1/195900/patients/enhancedbestmatch?firstname=First&lastname=Name&dob=11%2F11%2F1980', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  {/*const handleEdit = (patient: any) => {
    setEditedPatient(patient);
    // You can open a modal or switch the form to edit mode
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`your-api-endpoint/${id}`, {
        method: 'DELETE',
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  };*/}

  return (
   <div>
    <Sidebar/>
     <TableContainer className='table' component={Paper}>
     <h3>Patient List(Get list of patients - enhanced best matching search criteria)</h3>
    <Table >
        <TableHead>
          <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Dob</TableCell>
          <TableCell>MobileNo</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Country</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
     
        {patients.map((patient: any, index: number) => (
          <TableRow key={index}>
            <TableCell>{patient.firstname}</TableCell>
            <TableCell>{patient.lastname}</TableCell>
            <TableCell>{patient.dob}</TableCell>
            <TableCell>{patient.mobilephone}</TableCell>
            <TableCell>{patient.sex}</TableCell>
            <TableCell>{patient.countrycode}</TableCell>
            
              </TableRow>
               ))}
               </TableBody>
      </Table>
    </TableContainer>
    </div>
  /*<div>
    <Sidebar/>
    <h2>Patient List(Get list of patients - enhanced best matching search criteria)</h2>
    <table className="patient-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Dob</th>
          <th>MobileNo</th>
          <th>Gender</th>
          <th>Country</th>
          
        </tr>
      </thead>
      <tbody>
        {patients.map((patient: any, index: number) => (
          <tr key={index}>
            <td>{patient.firstname}</td>
            <td>{patient.lastname}</td>
            <td>{patient.dob}</td>
            <td>{patient.mobilephone}</td>
            <td>{patient.sex}</td>
            <td>{patient.countrycode}</td>
            
            </tr>
            // onClick={() => handleEdit(index)}
        ))}
      </tbody>
    </table>
        </div>*/
  );
};

export default PatientTable;
