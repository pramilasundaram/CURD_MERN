import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import "./Edit.css";
import Spiners from '../../components/spiner/Spiners';

export default function Edit() {
  const image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MZzUm3JUNZbn2H_D71zNStgWVHcEYvTdMg&usqp=CAU"

  const [image, setImage] = useState("");
  const[showspin,setShowspin]=useState(true);

  const [preview, setpreview] = useState(""); 

  const [form, setForm] = useState({
    email: "",
    phonenumber: "",
    fullname: "",
    gender: "",
    location: ""
  });

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const setprofile = (e) => {
    setImage(e.target.files[0])
  }

  useEffect(() => {
    if (image) {
      setpreview(URL.createObjectURL(image))
    }
    setTimeout(()=>{
      setShowspin(false)
    },1200)
  }, [image])

  const handlesubmit = (e) => {
    e.preventDefault();
    const { email, phonenumber, fullname, gender, location } = form;
    if (fullname === "") {
      toast.error("fullname is required")
    } else if (email === "") {
      toast.error("email is required")
    } else if (!email.includes("@")) {
      toast.error("enter valid email")
    } else if (phonenumber === "") {
      toast.error("phonenumber is required")
    } else if (phonenumber.length > 10) {
      toast.error("enter avlid phonenumber")
    } else if (gender === "") {
      toast.error("gender is required")
    } else if (image === "") {
      toast.error("image is required")
    } else if (location === "") {
      toast.error("location is required")
    } else {
      toast.success("registration successfully done!!")
    }

  }


  return (
    <div>
    { showspin? <Spiners/> :
    <div className='container'>
      <h1 className='text-center mt-1'>Update your Details</h1>
      <Card className='shadow mt-3 p-3'>
        <div className="profile_div text-center">
          <img src={preview ? preview : image1} alt="..." />
        </div>
        <Form onSubmit={handlesubmit}>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" name="fullname" onChange={handlechange} />
            </Form.Group>


            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handlechange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="mobile" placeholder="enter phone Number" name="phonenumber" onChange={handlechange} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>select ur profile</Form.Label>
              <Form.Control type="file" placeholder="image url" name="image" onChange={setprofile} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>select your gender</Form.Label>
              <Form.Check
                type={"radio"}
                label={"male"}
                name="gender"
                value="male"
                onChange={handlechange}
              />
              <Form.Check
                type={"radio"}
                label={"female"}
                name="gender"
                value="female"
                onChange={handlechange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>location</Form.Label>
              <Form.Control type="text" placeholder="location" name="location" onChange={handlechange} />
            </Form.Group>
            </Row>
            <Button variant="primary" type="submit" className='button'>
              Submit
            </Button>
          
        </Form>
      </Card>
      <ToastContainer position="top-center" />
    </div>}
    </div>
  )
}

