import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const useStyles = makeStyles({
  root: {
    minWidth: 340,
    maxWidth: 345,
    margin:'10px 15px',
  },
  media: {
    height: 200,
  },
});

export default function ProductCard({ Name, price, image }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={window.location.origin + image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          <AddIcon />
        </Button>
        <Button size="small" variant="contained">
          <RemoveIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
