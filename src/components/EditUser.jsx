import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_URL } from '../App';
import axios from 'axios';

function EditUser() {

    let {id} = useParams()
    let navigate = useNavigate()

    let [name,setName] = useState("")
    let [image,setImage] = useState("")
    let [address,setAddress] = useState("")
    let [username,setUserName] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [website,setWebsite] = useState("")
    let [company,setCompany] = useState("")

    let handleEdit = async()=>{
        try {
            let data = {name,username,email,phone,website,image,address,company}
            let res = await axios.put(`${API_URL}/${id}`,data)
            if(res.status === 200){
              
              navigate('/dashboard')
            }
           
        } catch (error) {
            
        }
       
    }

    const getUserById = async ()=>{
        try {
          let res = await axios.get(`${API_URL}/${id}`)
          if(res.status === 200)
          {
               setName(res.data.name)
               setUserName(res.data.username)
               setEmail(res.data.email)
               setPhone(res.data.phone)
               setWebsite(res.data.website)
               setAddress(res.data.address)
               setCompany(res.data.company)
               setImage(res.data.image)
          }
        } catch (error) {
          
        }
    }

    useEffect(()=>{
      getUserById()
    },[])
  return (
    <div className="container-fluid">
     <Form>

<Form.Group className="mb-3" >
      <Form.Label className='label'>Name</Form.Label>
      <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" >
      <Form.Label className='label'>Username</Form.Label>
      <Form.Control type="text" value={username} onChange={(e)=>setUserName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" >
        <Form.Label className='label'>Image</Form.Label>
        <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>

  <Form.Group className="mb-3" >
          <Form.Label className='label'>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>

     <Form.Group className="mb-3">
          <Form.Label className='label'>Address:</Form.Label><br/>          
          <Form.Control  type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>      
     </Form.Group>

  <Form.Group>
        <Form.Label className='label'>Phone Number</Form.Label><br/>
        <Form.Control type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
  </Form.Group>

  <Form.Group>
        <Form.Label className='label'>Website</Form.Label><br/>
        <Form.Control type="text" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
  </Form.Group>
<br></br>
  <Form.Group>
        <Form.Label className='label'>Company:</Form.Label><br/>
        <Form.Control type="text" value={company} onChange={(e)=>setCompany(e.target.value)} />
  </Form.Group>

  <Button variant="primary" onClick={()=>handleEdit()}>
    Submit
  </Button>
</Form>
    </div>
  );
}

export default EditUser;