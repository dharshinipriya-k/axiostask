import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import TopBar from "./TopBar";
import { API_URL } from "../App";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let [user, setUser] = useState([]);
  let navigate = useNavigate();

  const getUserData = async () => {
    let res = await axios.get(API_URL);
    if (res.status === 200) {
      setUser(res.data);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        getUserData();
      }
    } catch (error) {}
  };

  const changeStatus = async (e)=>{
    try {
      e.status = !e.status
      let res = await axios.put(`${API_URL}/${e.id}`,e)
      if(res.status === 200)
      {
        getUserData()
      }
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className="container-fluid">
        <TopBar />
        <div className="dashboard">
          {user.map((e, i) => {
            return (
              <Card className="display-card" style={{ width: "20rem" }} key={i}>
                <Card.Img className="card-img" variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center", textTransform:"uppercase", fontWeight:"bolder" }}>
                  <b>{e.name}</b>
                  </Card.Title>
                  <Card.Text>Username: <b>{e.username}</b></Card.Text>
                  <Card.Text>Email: <b>{e.email}</b></Card.Text>
                  <Card.Text>Phone: <b>{e.phone}</b></Card.Text>
                  <Card.Text>Address: <b>{e.address}</b></Card.Text>
                  <Card.Text>Company Name: <b>{e.company}</b></Card.Text>
                  <Card.Text>Website: <b>{e.website}</b></Card.Text>
                  {e.status ? (
                    <Button variant="danger" onClick={()=>changeStatus(e)}>Reject</Button>
                   
                  ) : (
                    <Button variant="success" onClick={()=>changeStatus(e)}>Approve</Button>
                    
                  )}
                  &nbsp;
                  <Button
                    variant="info"
                    onClick={() => navigate(`/edit-user/${e.id}`)}
                  >
                    Edit user
                  </Button>{" "}
                  <Button variant="secondary" onClick={() => handleDelete(e.id)}>
                    Delete user
                  </Button>{" "}
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
