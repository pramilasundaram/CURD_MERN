import React,{useContext, useEffect, useState}from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tables from '../../components/Tables/Tables';
import Alert from 'react-bootstrap/Alert';
import { usergetfunction } from '../../services/Apis';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Spiners from '../../components/spiner/Spiners';
import { addData } from '../../components/Context/ContextProvider';
export default function Home() {
const[showspin,setShowspin]=useState(true);
const [data,setdata]=useState([]);
const nav = useNavigate();

const userGet=async()=>{
  const response=await usergetfunction();  
  if(response.status===200){
  setdata(response.data);
  }
}
useEffect(()=>{
  userGet();
  setTimeout(()=>{
    setShowspin(false)
  },1200)
},[])
 
const {useradd,setUseradd}=useContext(addData);
  return (
    <div>
    {useradd?  <Alert variant="danger" onClose={() => setUseradd("")} dismissible>{useradd.fullname.toUpperCase()} successfully added!!</Alert>:""}
    <div className='container'>
      <Card className='shadow mt-3 p-3' >
        {/*search and add user*/}
        <div className="search_add mt-4 d-flex justify-content-between">
          <div className='search col-lg-4'>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </div>

          <div className="add_btn">
            <Button variant="warning" onClick={() => nav("/register")}>Add user</Button>
          </div>
        </div>

        {/*export ,filter,sort*/}
        <div className="drop mt-4 d-flex justify-content-between flex-wrap">
          {/*export-begin*/}
          <div className="csv">
            <Button className="csv_btn" variant="success" >Export To Csv</Button>
          </div>
          {/*export-end*/}

          {/*filter-begin */}
          <div className='filter_gender'>
            <div className="filter">
              <h4>Filter by Gender</h4>
              <div className='gender d-flex justify-content-around' >
                <Form.Check
                  type={"radio"}
                  label={"All"}
                  name="gender"
                  value="All"
                  defaultChecked
                />
                <Form.Check
                  type={"radio"}
                  label={"Male"}
                  name="gender"
                  value="Male"
                />
                <Form.Check
                  type={"radio"}
                  label={"Female"}
                  name="gender"
                  value="Female"
                />
              </div>
            </div>
          </div>
          {/*filter-end*/}

          {/*sort-begin*/}
          <div className='filter_sort'>
            <div className="sort">
              <h4>sort by value</h4>
              <Dropdown className='text-center'>
              <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
             Sort
              </Dropdown.Toggle>        
              <Dropdown.Menu>
                <Dropdown.Item >New</Dropdown.Item>
                <Dropdown.Item >Old</Dropdown.Item>                
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
          {/*sort-end*/}
        </div>

        {/*table or spinner*/}
        <Card.Body className='text-center'>
         {showspin?<Spiners/>:<Tables data={data}/> } 
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}
