import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import TopBar from './TopBar';
import { API_URL } from '../App';
import axios from 'axios';

function Dashboard() {

    let [user,setUser] = useState([])

    const getUserData = async()=>{
      let res = await axios.get(API_URL)
      if(res.status === 200){
        setUser(res.data.filter(e=>e.status))
      }
    }

    useEffect(()=>{
      getUserData()
    },[])


  return <>
  <div className='container-fluid'>
  <TopBar/>
  <div  className="dashboard">
    {user.map((e,i)=>{
        return <Card style={{ width: '20rem' }} key={i} className="display-card">
           <Card.Img className="card-img" variant="top" src={e.image} />
           <Card.Body>
             <Card.Title style={{textAlign:"center", textTransform:"uppercase"}}><b>{e.name}</b></Card.Title>
             <Card.Text>Username: <b>{e.username}</b></Card.Text>
             <Card.Text>Email: <b>{e.email}</b></Card.Text>
             <Card.Text>Phone: <b>{e.phone}</b></Card.Text>
             <Card.Text>Address: <b>{e.address}</b></Card.Text>  
             <Card.Text>Company Name: <b>{e.company}</b></Card.Text>  
             <Card.Text>Website: <b>{e.website}</b></Card.Text>             
           </Card.Body>
         </Card>
        
    })}
   </div>
    </div>
  </>
}

export default Dashboard