import TokenProvider from '../../token/token';
import Sidebar from '../Sidebar'
import React, { useEffect, useState } from 'react';
import './PatientList.css';
const GenderIdentityList: React.FC = () => {
  const [genderIdentities, setGenderIdentities] = useState<any[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenders = async () => {
      
      try {
        const token=localStorage.getItem('accesstoken');
        setAccessToken(token)
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/configuration/patients/genderidentity', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch gender identities');
        }
        const data = await response.json();
        setGenderIdentities(data.genderidentity || []); 
        console.log('genderIdentity',data);
        
      } catch (error) {
        console.error('Error fetching gender identities:', error);
      }
    };

    fetchGenders();
  }, []);
    return (
    <div>
       <Sidebar/>
    <h2>Gender Identity Information(Get reference list of patient's gender identity information)</h2>
    <ul>
      {genderIdentities.map((genderIdentity: any) => (
        <li key={genderIdentity.id}>
          <strong>{genderIdentity.genderidentityfields}</strong>: {genderIdentity.description}
        </li>
      ))}
    </ul>
  </div>
  /* <div>
      <h2>Gender Identity Information</h2>
      <table>
        <thead>
          <tr>
           <th>Gender Identity</th>
           <th>Total Count</th>
            </tr>
        </thead>
        <tbody>
          {genderIdentities.map((gender: any) => (
            <tr key={gender.genderidentityid}>
              <td>{gender.genderidentityfields}</td>
              <td>{gender.totalcount}</td>

             </tr>
          ))}
        </tbody>
      </table>
    </div>*/
  );
};

export default GenderIdentityList;
