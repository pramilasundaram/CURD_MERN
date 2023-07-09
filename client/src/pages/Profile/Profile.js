import React,{useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Profile.css";
import Spiners from '../../components/spiner/Spiners';
export default function Profile() {
  const[showspin,setShowspin]=useState(true);
useEffect(()=>{
  setTimeout(()=>{
    setShowspin(false)
  },1200)
},[])
  return (
    <div>
    {showspin?<Spiners/>:<div className='container'>
    <div className='heading'>
      <h1 className='text-center mt-1'>profile</h1>
      </div>
      
      
    <div>
      <Card className='shadow mt-3 p-3' >
      <div className="profile_div text-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MZzUm3JUNZbn2H_D71zNStgWVHcEYvTdMg&usqp=CAU" alt="..." />
    </div>
      <Card.Body className='text-center'>
        <Card.Title>pramilaSundaram</Card.Title>       
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item><h6 style={{display:"inline-block"}}>EMAIL:&nbsp;</h6>email@gmail.com</ListGroup.Item>
        <ListGroup.Item><h6 style={{display:"inline-block"}}>PHONENUMBER:&nbsp;</h6>786956437</ListGroup.Item>
        <ListGroup.Item><h6 style={{display:"inline-block"}}>GENDER:&nbsp;</h6>female</ListGroup.Item>
        <ListGroup.Item><h6 style={{display:"inline-block"}}>LOCATION:&nbsp;</h6>chennai</ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
      </Card>
      </div>
    </div>} 
    
    </div>
  )
}
