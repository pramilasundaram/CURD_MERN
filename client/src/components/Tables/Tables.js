import React from 'react'
import "./Table.css"
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import {BASE_URL} from "../../services/helper"
import { FaEdit,FaTrashAlt } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import {useNavigate} from "react-router-dom"
export default function Tables({data}) {
  const nav=useNavigate();
  return (
    
    <Table  striped bordered hover size="sm">
    <thead className='thead-dark'>
      <tr className='table-dark'>
        <th>s.no</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Profile</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item,index)=>{
     
      return <tr>
      <td>{index+1}</td>
      <td>{item.fullname}</td>
      <td>{item.email}</td>
      <td>{item.phonenumber}</td>
      <td className="profile_div text-center"><img src={`${BASE_URL}/images/${item.image}`} alt="..."/></td>
      <td>
      <Button variant="success" onClick={()=>nav("/profile/"+ item._id)}><GrView/></Button>
    <Button variant="warning" onClick={()=>nav("/edit/"+4)}><FaEdit/></Button>
    <Button variant="danger"><FaTrashAlt/></Button>
      </td>
    </tr> 
    })}    
    </tbody>
  </Table>
   
  )
}
