import React, { useEffect, useState } from 'react';
import './SinglePatient.css';
import Sidebar from '../Sidebar';
import TokenProvider from '../../token/token';

const fetchData = async (token: string | null) => {
  try {
    const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/patients/12354', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching patient details:', error);
    return null;
  }
};

const App: React.FC = () => {
  const [patientDetails, setPatientDetails] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    setAccessToken(token);

    const fetchPatientDetails = async () => {
      if (token) {
        const data = await fetchData(token);
        setPatientDetails(data);
        setLoading(false);
      } else {
        console.error('No access token found');
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {patientDetails && <PatientTable patientDetails={patientDetails} />}
    </div>
  );
};

const PatientTable: React.FC<{ patientDetails: Record<string, any> }> = ({ patientDetails }) => {
  const renderValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof value === 'object' && value !== null) {
      return (
        <table>
          <tbody>
            {Object.entries(value).map(([key, val]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{renderValue(val)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return value.toString();
    }
  };

  return (
    <div className="table-container">
      <Sidebar />
      <table className="table">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {patientDetails
            ? Object.entries(patientDetails).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{renderValue(value)}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default App;
