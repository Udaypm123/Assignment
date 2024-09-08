import { Card, CardContent, CardMedia,Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid2"

const Home = () => {
  var [product, setproduct] = useState([]);
  useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
  .then((response) => setproduct(response.data));
   });

    
  return (
    <>
      <br /><br />
      <Grid container spacing={1}>
        {
          product.map((val) => {
            return(
              <Grid key={val.id} size={4}>
                <Card sx={{maxWidth:250,height:"80%"}}>
                  <CardMedia
                  sx={{height:80}}
                  image={val.image}
                  title="Products"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography variant="h5" >
                     $ {val.price}
                    </Typography>
                    <Typography variant="h5" >
                      {val.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          }
        )
      }
      </Grid>
      </>
  )
}

export default Home
