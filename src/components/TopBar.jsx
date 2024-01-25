import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function TopBar() {

    let navigate = useNavigate()

  return <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pWibbKtLwoSuyJqzF_VcnH4lNcyxtugcxw&usqp=CAU"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React AXIOS
    </Navbar.Brand>
    <Button variant="primary" onClick={()=>navigate('/')}>Home</Button>
    <Button variant="primary" onClick={()=>navigate('/dashboard')}>Dashboard</Button>
    <Button variant="primary" onClick={()=>navigate('/create-user')}>Create User</Button>
  </Container>
</Navbar>
}

export default TopBar