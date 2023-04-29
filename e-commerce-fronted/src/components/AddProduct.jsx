import { useState } from "react"
import { Card,Button,Form } from "react-bootstrap"
const AddProduct=()=>{
  const [Pname,setPname]=useState('')
  const [Pcategory,setPcategory]=useState('')
  const [Pprice,setPprice]=useState('')
  const [Punit,setPunit]=useState('')
  const [Ppic,setPpic]=useState('')
  const [sellerName,setSellerName]=useState('')




const addingProduct=(e)=>{
 e.preventDefault()
 fetch('http://localhost:5000/addProduct',{
      method:'Post',
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
       Pname,
       Pcategory,
       Pprice,
       Punit,
       Ppic,
       sellerName


      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data) alert("Product added successfully")

      else alert("Details must be correct")
    })

}






    return <>
    <div >
    <Card style={{ width: '500px',marginLeft:'600px',marginTop:'50px' ,backgroundImage:"url('https://www.bigbuy.eu/blog/wp-content/uploads/2022/11/rentable-dropshipping-featured.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <Card.Body >
       <u><h1 className="text-center">Fill the details..</h1></u>
        <Form onSubmit={addingProduct} style={{marginTop:'80px'}}> 

      <Form.Group className="mb-3">
        <Form.Label style={{fontSize:'large',fontWeight:'bold'}}>Product Name</Form.Label>
        <Form.Control type="text" onChange={e=>setPname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{fontSize:'large',fontWeight:'bold'}}>Category</Form.Label>
        <Form.Control type="text" onChange={e=>setPcategory(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{fontSize:'large',fontWeight:'bold'}}>Price</Form.Label>
        <Form.Control type="text" onChange={e=>setPprice(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label style={{fontSize:'large',fontWeight:'bold'}}>unit</Form.Label>
        <Form.Control type="text" onChange={e=>setPunit(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{fontSize:'large',fontWeight:'bold'}}>Image</Form.Label>
        <Form.Control type="text" onChange={e=>setPpic(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={{fontSize:'large',fontWeight:'bold'}}>Seller name</Form.Label>
        <Form.Control type="text" onChange={e=>setSellerName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Button type="submit" className="btn-success">Add</Button>
      </Form.Group>
    </Form>
      </Card.Body>
    </Card>

    </div>
    </>
}

export default AddProduct