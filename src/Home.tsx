import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Form from "./Form";
import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "./popup";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage
  } from 'mdb-react-ui-kit';

function Home() {
  const [openPopups, setOpenPopup] = useState(false);
  const [todos, setTodos] = useState<any>([]);
  const [sss, setSsss] = useState();

  useEffect(() => {
    gettodos();
  }, []);

  const gettodos = async () => {
    const response = await axios.get(`http://localhost:5000/todos`);
    console.log(response.data);
    setTodos(response.data);
  };

  const todoMap = todos?.map((data: any, i: number) => {
    return (
    //   <Card>
    //     <Card.Body>{data?.text}</Card.Body>
    //   </Card>
    <MDBCard className='mb-3'>
      
        <MDBCardBody>
          <MDBCardTitle>{data?.text}</MDBCardTitle>
          <MDBCardText>
          {data?.para}
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
      
    );
  });

  return (
    <div className="container bg">
          <input type="text" name="name" onClick={() => setOpenPopup(true)} />
                  
               
      <Popup openPopup={openPopups} setOpenPopup={setOpenPopup}>
        <Form />
      </Popup>

      
      <h1>fdfghjvklnkksadsfjkl</h1>
      <p>xyw</p>
      <div className="aGl">{todoMap}</div>
    </div>
  );
}

export default Home;
