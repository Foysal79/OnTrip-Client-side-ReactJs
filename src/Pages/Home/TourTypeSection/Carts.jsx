import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';

const Carts = ({item}) => {
  const {_id,tripTitle, tripType, tripPrice, imgUrl1 } = item || {}
  const  axiosSecure = useAxiosSecure();
  const {user} = React.useContext(AuthContext);

  const handelMyWishlistSetData = e => {
    e.preventDefault();
    const packase = {
      menuId : _id,
      tripTitle,
      tripType,
       tripPrice,
        imgUrl1,
        email : user.email,
      }

      axiosSecure.post("/myWishList", packase)
  .then(res => {
    if(res.data.insertedId)
    {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your packges my WishList session",
        showConfirmButton: false,
        timer: 1500 });
    }
    
    
  })

    console.log("handel My Wishlist Set Data Our Packages Card", user.email);

  }


    return (
        <div>
            
             <Card  sx={{ maxWidth: 345 , height: 400, overflow: 'auto', padding: "4px", borderRadius: "10px" }}>
      <CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl1}
          alt="green iguana"
          style={{ position: 'relative' }}
        />
        {
          user ? <Button
          variant="contained"
          onClick={handelMyWishlistSetData}
          style={{
            position: 'absolute',
            top: '20%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent'
          }}
        >
          <FavoriteBorderIcon sx={{fontSize: '2.5rem'}} ></FavoriteBorderIcon>
        </Button> : <Button
          variant="contained"
          
          style={{
            position: 'absolute',
            top: '20%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent'
          }}
        >
          <FavoriteBorderIcon sx={{fontSize: '2.5rem'}} ></FavoriteBorderIcon>
        </Button>
        }
      </CardActionArea>
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}}  gutterBottom variant="h7" component="div">
            {tripTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tripType}
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}  gutterBottom variant="h7" component="div">
            price : {tripPrice} $
          </Typography>
          
        </CardContent>
        <Grid container justifyContent="center" >
        <Link to={`/singlePackages/${_id}`} >
        <Button  sx={{ width: '200px', backgroundColor: "#FFB703"}} onClick={() => (console.log('button work')) } variant="contained">View details</Button>
        </Link>
        </Grid>
        
      </CardActionArea>
    </Card>
            
        </div>
    );
};

export default Carts;