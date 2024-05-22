import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const View = () => {
    const  navigate = useNavigate();

    const [data,setData] = useState({
        lastmodifiedby:'',
        lastmodified:'',
        notetext:''
    })
const handleBack = () => {
    navigate ('/patient-chart/:id')
}
    const params = useParams()
    const endPoint: string = `https://api.preview.platform.athenahealth.com/v1/195900/patients/${params?.id}/chartalert?departmentid=1`
  const getAPI = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer aGBZSWnB7EtmRTWr4ciytYzsrMRi'
    }
    try {
      const response = await axios.get(endPoint, {
        headers: headers
      })
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAPI()
    console.log()
  }, [])
  return (
    <>
    <div className='d-flex justify-content-center row align-items-center'>
    <h1 className='text-success text-center mt-5'>Create New Patient Chart</h1>
    <div style={{border:'2px solid #000', width:'50%',borderRadius:'25px'}} className="d-flex justify-content-center  h-100">
    
    <div className='text-center mt-3'>
      <h3>Lastmodifiedby : {data.lastmodifiedby}
      <br />
      Lastmodified : {data.lastmodified}
      <br />
      Notetext : {data.notetext}
      </h3>
    </div>
    </div>
    </div>
    <div className='d-flex justify-content-center text-primary mt-4'>
        <button type='submit' onClick={handleBack}>Back</button>
    </div>
    </>
  )
}

export default View