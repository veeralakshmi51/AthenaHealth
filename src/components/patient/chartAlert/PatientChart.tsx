
import { useNavigate} from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import Sidebar from '../../Sidebar';

const PatientChart = () => {
  const navigate = useNavigate();
    const handleCreate = () => {
        navigate('/Create');
    };

    const handleDelete = () => {
        navigate('/Delete');
    };

    
     const handleView = () => {
    navigate('/View');
     }

    
    return (
        <div>
            
        <Container>
            <Row>
                <Col>
                    <h1 className= "text-center mt-4 mb-4 ">Patient Chart Alert</h1>
                </Col>
            </Row>
            
                <div className='d-flex gap-3 justify-content-center my-2' >
                    <Button color="primary" onClick={handleCreate} className="mr-2">Create</Button>
                    <Button color="danger" onClick={handleDelete} className="mr-2">Delete</Button>
                    <Button color="info" onClick={handleView} className="mr-2" >View</Button>
                   
                </div>
            
        </Container>
        </div>
    );
};

export default PatientChart;