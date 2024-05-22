import TokenProvider from '../../token/token';
import React, { useEffect, useState } from 'react';
import './PatientList.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from '../Sidebar'
import token from '../../token/token';

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [accessToken,setAccessToken]=useState<string|null>(null);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token=localStorage.getItem('accesstoken');
        setAccessToken(token);
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/patients/search?searchterm=null', {
          headers: {
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch patients');
        }
        const data = await response.json();
        setPatients(data.patients);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
    <Sidebar/>
     <TableContainer className='table' component={Paper}>
     <h3>Patient List(Get list of patients - (optional) visible to a practitioner)</h3>
    <Table >
        <TableHead>
          <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Patient Id</TableCell>
          <TableCell>Dob</TableCell>
          <TableCell>MobileNo</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Country</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
     
        {patients.map((patient: any) => (
          <TableRow key={patient.patientid}>
            <TableCell>{patient.firstname}</TableCell>
            <TableCell>{patient.lastname}</TableCell>
            <TableCell>{patient.patientid}</TableCell>
            <TableCell>{patient.dob}</TableCell>
            <TableCell>{patient.homephone}</TableCell>
            <TableCell>{patient.state}</TableCell>
            <TableCell>{patient.sex}</TableCell>
            
              </TableRow>
               ))}
               </TableBody>
      </Table>
    </TableContainer>
    </div>
    /*<div>
      <h2>Patients(Get list of patients - (optional) visible to a practitioner)</h2>
      <table className="patient-table">
        <thead>
          <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Patient Id</th>
          <th>Dob</th>
          <th>PhoneNo</th>
          <th>State</th>
          <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient: any) => (
            <tr key={patient.patientid}>
              <td>{patient.firstname}</td>
            <td>{patient.lastname}</td>
            <td>{patient.patientid}</td>
            <td>{patient.dob}</td>
            <td>{patient.homephone}</td>
            <td>{patient.state}</td>
            <td>{patient.sex}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>*/
  );
};

export default PatientList;
