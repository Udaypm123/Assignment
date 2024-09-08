import { Button, TextField } from '@mui/material'
import React from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate=useNavigate();
  return (
    <div class="product" >
     <h3>ADD PRODUCT</h3> 
     <TextField label="Product Name" variant="outlined" sx={{width:400}}required ></TextField><br></br><br></br>
     <TextField type="file"  variant="outlined" sx={{width:400}}required ></TextField><br></br><br></br>
     <TextField label="Price" variant="outlined" sx={{width:400}}required></TextField><br></br><br></br>
     <TextField label="Category" variant="outlined"sx={{width:400}}required></TextField><br></br><br></br>
     
     <Button variant='contained'sx={{width:400}} onClick={()=>{navigate('/')}} >ADD PRODUCT</Button><br></br><br></br>
    </div>
  )
}

export default Product
