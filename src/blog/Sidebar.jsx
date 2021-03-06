import React from "react";
import PropTypes from "prop-types";
import { Typography, Link, Grid, Paper } from "@material-ui/core";
import useStyles from "./sidebarStyles";

const Sidebar = (props) => {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Archives
        </Typography>
        {archives.map((archive) => (
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
          >
            {archive.title}
          </Link>
        ))}
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Social
        </Typography>
        {social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
};


Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default Sidebar;
