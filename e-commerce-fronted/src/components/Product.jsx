import { Card,Button, ButtonGroup } from "react-bootstrap"
import Style from "./product.module.css"
import { useEffect, useState } from "react"
import Modal from 'react-modal'


const Product=({myProduct})=>{
  const [item,setItem]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name,setName]=useState('')
  const [seller,setSeller]=useState('')
  const [pic,setPic]=useState('')
  const [price,setPrice]=useState('')
  
console.log("product")


useEffect(()=>{
  if(myProduct.length===0){
    fetch('http://localhost:5000/allProduct',{
      method:'get',
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setItem(data)
    })
  }
    else{
      setItem(myProduct)
    }
  },[myProduct])

const addToCart=(Piid)=>{
  if(localStorage.getItem("jwt") === null){
     alert("you must be login")
    
  }else{
  fetch(`http://localhost:5000/addToCart/${Piid}`,{
    method:'Post',
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
 
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
alert(data)
  })
  }

}


const openModal = (Pname,Ppic,sellerName,Pprice) => {
  setName(Pname)
  setPic(Ppic)
  setSeller(sellerName)
  setPrice(Pprice)
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};


  
    return <>
   <div className={Style.abc} >

    { item.map(elem=>{
        return <>
           <Card className={Style.cards}  >
            <center>
           <Card.Img variant="top" src={elem.Ppic} style={{height:'250px',width:'300px'}} /></center>
           <Card.Body>
            <Card style={{padding:'5px'}}>
            <h3>{elem.Pname}-₹ {elem.Pprice}/-</h3>
            <h3>{elem.Pcategory}</h3>
            <h4>only {elem.Punit} left</h4>
            <p>Seller:{elem.sellerName}</p>
            <ButtonGroup>
            <Button onClick={()=>openModal(elem.Pname,elem.Ppic,elem.sellerName,elem.Pprice)}>View</Button>

             <Button variant='danger' onClick={()=>addToCart(elem._id)}>Add to cart</Button>
             </ButtonGroup>
             </Card>
           </Card.Body>
         </Card>
         </>

    })
}
<Modal isOpen={isModalOpen} onRequestClose={closeModal}  className={Style.productmodal}>
  <Card>
    <Card.Body>
    <img src={pic} style={{height:'450px',width:'600px'}} alt=""></img>

    </Card.Body>
  </Card>
        <h3>{name}-₹ {price}/-</h3>
            <p>Seller:{seller}</p>
        <Button style={{float:'right'}} variant="dark" onClick={closeModal}>Back</Button>
      </Modal>
   </div>
    </>
}

export default Product