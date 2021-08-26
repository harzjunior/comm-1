import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, Divider } from "@material-ui/core";
import useStyles from "./mainStyles";
import Markdown from "./Markdown";

export const Main = (props) => {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
};

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
