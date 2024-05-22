import React, { useEffect, useState } from 'react'; 
import './AvailableBed.css'; // Import your CSS file 
import Sidebar from '../Sidebar';
import TokenProvider from '../../token/token';
interface Bed { 
  bedname: string; 
  unitid: number; 
  alloweddepartmentids: string[]; 
  bedid: number; 
  hospitalroomid: number; 
  unitname: string; 
  hospitalroomname: string; 
} 
 
const AvailableBed: React.FC = () => { 
  const [beds, setBeds] = useState<Bed[]>([]); 
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => { 
    const fetchBeds = async () => { 
      
      try { 
        const token = localStorage.getItem('accesstoken');
        setAccessToken(token);
        if(token){
          const response = await fetch('https://api.preview.platform.athenahealth.com/v1/1128700/beds?departmentid=1&bedid=0&unitid=0&hospitalroomid=0&limit=1500&offset=0', { 
            headers: { 
              Authorization: `Bearer ${token}`, 
            }, 
          }); 
          const data = await response.json(); 
        setBeds(data.beds);
        console.log('token',token);
        
        }
         
      } catch (error) { 
        console.error('Error fetching beds:', error); 
      } 
    }; 
 
    fetchBeds(); 
  }, []); 
 
  return (
    <div> 
        <Sidebar/> 
    <div className="d-flex justify-content-center"> 

      <h1 className="mt-6 mb-4" >Available Beds</h1> 
      <table className="table"> 
        <thead> 
 
          <tr> 
            <th>Bed Name</th> 
            <th>Bed Id</th> 
            <th>Room Name</th> 
            <th>Room Id</th> 
          </tr> 
        </thead> 
        <tbody> 
          {beds.map((bed) => ( 
            <tr key={bed.bedid}> 
              <td>{bed.bedname}</td> 
              <td>{bed.bedid}</td> 
                            <td>{bed.hospitalroomname}</td> 
              <td>{bed.hospitalroomid}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
    </div> 
  ); 
}; 
 
export default AvailableBed;