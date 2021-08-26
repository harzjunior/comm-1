import React from "react";
import { Grid, Paper, Typography, Link } from "@material-ui/core";
import useStyles from "./blogStyles";
import PropTypes from "prop-types";

export const MainFeaturedPost = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              style={{
                background: "rgba(211, 211, 211, 0.1)",
                padding: "1px",
              }}
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              style={{
                background: "rgba(211, 211, 211, 0.1)",
                padding: "15px",
              }}
            >
              {post.description}
            </Typography>
            <Link
              variant="subtitle1"
              href="/signin"
              style={{ background: "rgba(211, 211, 211, 0.1)", color: "black" }}
            >
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
