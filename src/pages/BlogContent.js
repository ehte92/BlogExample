import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { blogData } from "../data/blog";
import moment from "moment";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}));

function BlogContent() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {blogData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={data.image}
                    title={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        component="p"
                      >
                        <AccessTimeIcon className="mr-1" />
                        {moment(data.date).format("MMM DD, YYYY")}
                      </Typography>
                    </Box>
                    <Box ml={2}>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        component="p"
                      >
                        <VisibilityIcon className="mr-1" />
                        {data.views}
                      </Typography>
                    </Box>
                    <Box ml={2}>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        component="p"
                      >
                        <LocalOfferIcon className="mr-1" />
                        {data.category}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      href="/blogs"
                    >
                      Read
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BlogContent;
