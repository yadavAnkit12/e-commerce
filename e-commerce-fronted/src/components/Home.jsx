import { useState } from "react"
import Product from "./Product"
import SearchBar from "./SearchBar"
import { Col, Row } from "react-bootstrap"
import HomeFooter from "./HomeFooter"





const Home=()=>{
    const [myProduct,setMyProduct]=useState([])
// document.body.style.backgroundColor='#e1b382'

const searching= (search)=>{
  fetch(`http://localhost:5000/myProduct/${search}`,{
        method:'get',
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
     
      })
      .then(res=>res.json())
      .then(data=>{
        console.log("-->",data)
        setMyProduct(data)
      })
}


    return <>
    <div style={{backgroundColor:'#f0fff0'}}>
      <Row>
        
    <SearchBar searching={searching}  />
    </Row>
<center style={{backgroundColor:'white',marginTop:'-15px'}}>

<Row>
  <Col sm='2'>
  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d64cae0f8081256a.png?q=100" onClick={()=>searching('Phone')} alt=""></img>
  <h3>Mobiles & tablets</h3>

  </Col>
  <Col sm='2'>
  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7dbcda527b648814.png?q=100" onClick={()=>searching('TV')} alt=""></img>
  <h3>Smart Tv</h3>

  </Col>
  <Col sm='2'>
  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d44ffc537ed6e241.png?q=100" onClick={()=>searching('cloth')} alt=""></img>
  <h3>Fashion</h3>

  </Col>
  <Col sm='2'>
  <img src="https://m.media-amazon.com/images/I/81nC4u9eYfL._UY445_.jpg" width={100} height={130} onClick={()=>searching('watch')} alt=""></img>
  <h3>Watches</h3>

  </Col>
  <Col sm='2'>
  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d300931a0fd1c17e.png?q=100" onClick={()=>searching('Home')} alt=""></img>
  <h3>Home & Furniture</h3>

  </Col>
  <Col sm='2'>
  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100" onClick={()=>searching('Grocery')} alt=""></img>
  <h3>Grocery</h3>

  </Col>
  
</Row>
<hr
   style={{
   background: "#5F5959",
   height: "12px",
   border: "none",
   marginTop:'-3px'
   }}
/>
</center>
<Row>
    <Product myProduct={myProduct}/>
    </Row>
    <Row>
      <HomeFooter/>
    </Row>
    </div>
    </>
}
export default Home