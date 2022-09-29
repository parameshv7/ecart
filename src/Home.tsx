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
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Checkbox } from "@mui/material";

function Home() {
  const [openPopups, setOpenPopup] = useState(false);
  const [todos, setTodos] = useState<any>([]);
  const [sss, setSsss] = useState();

  useEffect(() => {
    gettodos();
  }, []);

  const gettodos = async () => {
    const response = await axios.get(`http://localhost:1000/todos`);
    console.log(response.data);
    setTodos(response.data);
  };

  const todoMap = todos?.map((data: any, i: number) => {
    return (
   
      <div>
        <Checkbox></Checkbox>
        <MDBCard className="mb-3">
          <MDBCardBody>
            <MDBCardTitle>{data?.text}</MDBCardTitle>
            <MDBCardText>{data?.para}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  });

  return (
    <div className="container bg">
      <h1>WelcomeBack Man!!</h1>
      <p>You Have Pending Task Man</p>
      <input
        type="text"
        name=""
        value="Please Click to Add Task!!"
        onClick={() => setOpenPopup(true)}
      />
      <br />
      <br />
      <Popup openPopup={openPopups} setOpenPopup={setOpenPopup}>
        <Form setOpenPopup={setOpenPopup} setTodos={setTodos} />
      </Popup>

      <div className="aGl">{todoMap}</div>
    </div>
  );
}

export default Home;
