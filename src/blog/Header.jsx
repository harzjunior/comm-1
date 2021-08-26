import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton"; // Do not curly braces for the IconButton
import SearchIcon from "@material-ui/icons/Search";
import { Typography, Link, Toolbar, Button } from "@material-ui/core";
import useStyles from "./headerStyles";

export const Header = (props) => {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Button href={"/pricing"} size="small">
          Pricing
        </Button>
        <Button href={"/signinside"} size="small">
          User Sign-In
        </Button>
        <Button href={"/signupside"} size="small">
          Pro Member Sign-Up
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          <Link href={"/signup"}> Sign up</Link>
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
