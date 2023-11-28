import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const OurPackagesCard = ({packag}) => {
    const {_id, tripTitle, tripType, tripPrice, imgUrl1 } = packag || {}
    return (
        <div>
            
             <Card  sx={{ maxWidth: 345 , height: 370, overflow: 'auto', padding: "4px", borderRadius: "10px" }}>
      <CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl1}
          alt="green iguana"
          style={{ position: 'relative' }}
        />
        <Button
          variant="contained"
          onClick={() => console.log('faverite item ')}
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

export default OurPackagesCard;