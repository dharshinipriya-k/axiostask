import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_URL } from '../App';
import axios from 'axios';

function CreateUser() {

    let navigate = useNavigate()

    let [name,setName] = useState("")
    let [image,setImage] = useState("")
    let [address,setAddress] = useState("")
    let [username,setUserName] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [website,setWebsite] = useState("")
    let [company,setCompany] = useState("")

    let handleCreate = async()=>{
        try {
            let data={name,username,email,address,phone,website,image,company}
            let res = await axios.post(API_URL,data)
          
            navigate('/dashboard')
        } catch (error) {
            
        }
       
    }

  return (
    <div className="container-fluid">
      <div className='formWrapper'>
    <Form>

    <Form.Group className="mb-3" >
        <Form.Label className='label' >Name</Form.Label>
        <Form.Control type="text"  placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='label'>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image url" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='label'>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='label'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label className='label'>Address</Form.Label><br/>  
          <Form.Control  type="text" placeholder="Enter address" onChange={(e)=>setAddress(e.target.value)}/>             
      </Form.Group>

      <Form.Group>
            <Form.Label className='label'>Phone Number</Form.Label><br/>
            <Form.Control type="text" placeholder="Enter phone" onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>
      

      <Form.Group>
            <Form.Label className='label'>Company Website</Form.Label><br/>
            <Form.Control type="text" placeholder="Enter website" onChange={(e)=>setWebsite(e.target.value)}/>
      </Form.Group>
    

      <Form.Group>
        <Form.Label className='label'>Company Name</Form.Label><br/>
        <Form.Control type="text" placeholder='Enter company name' onChange={(e)=>setCompany(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={()=>handleCreate()}>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default CreateUser;