import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import girl from './img/girl.png';

export default function MediaCard() {
  return (
    <Card className="wow fadeInUp" sx={{ maxWidth: '100%', margin: '0 auto'}}>
      <CardMedia
        component="img"
        image={girl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Our journey from sheep to shop
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cliquam erat volupat. Praesent ut ligula non mi varius sagittis.
          Curabitur blandit mollis lacus. Praesent metus tellus...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}