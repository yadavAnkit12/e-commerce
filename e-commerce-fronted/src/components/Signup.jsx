import { useState } from "react"
import { Card, Row,Col,Form,Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Signip=()=>{

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [password,setPassword]=useState('')
const [type,setType]=useState('')
const signing=(e)=>{
   e.preventDefault()
    console.log(name,email,password,phone,type)
    fetch('http://localhost:5000/signup',{
      method:'Post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        phone,
        password,
        Type:type

      })
    })
    .then(res=>res.json())
    .then(data=>alert("Click on Back To login button"))
}





    return <>
  <div className="container" style={{marginTop:'80px'}}>
    <Card style={{ width: '1300px',height:'700px',boxShadow:'15px 15px #888888',backgroundColor:'ghostwhite' }}>
      <Card.Body>
       <Row>
        <Col sm="6">
      <div className="container">
        <h1 className="text-center" style={{fontStyle:'bold'}}>Sign Up</h1>
        <Form onSubmit={signing} style={{marginTop:'80px',marginLeft:'50px'}}> 
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={e=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone no.</Form.Label>
        <Form.Control type="text"  onChange={e=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Seller/Customer*</Form.Label>
        <Form.Control type="text" onChange={e=>setType(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <div style={{display:'inline'}}> 
        <Button type="submit" className="btn-danger">Signup</Button>
        <Link  className="btn btn-success" style={{float:'right'}}  to="/login">Back to login</Link>
        </div>
        
      </Form.Group>
    </Form>

    </div>
        </Col>
        <Col sm="6">
        <div className="container">
        <img src="https://th.bing.com/th/id/OIP.sEVnTWsFLnC7okliCOvbvQHaG5?pid=ImgDet&w=1000&h=931&rs=1" style={{height:'500px',marginTop:'80px'}}></img>

        </div>
        </Col>
       </Row>
      </Card.Body>
    </Card>

    
    </div>
  
  </>
}

export default Signip