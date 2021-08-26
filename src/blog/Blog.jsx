import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { CssBaseline, Grid, Card, Container } from "@material-ui/core";
import useStyles from "./blogStyles";
import { FeaturedPost } from "./FeaturedPost";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { MainFeaturedPost } from "./MainFeaturedPost";
import post1 from "./markdown/blog-post.1.md";
import post2 from "./markdown/blog-post.2.md";
import post3 from "./markdown/blog-post.3.md";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

const sections = [
  { title: "React.js", url: "https://reactjs.org/" },
  { title: "Next.js", url: "https://nextjs.org/" },
  { title: "Bootstrap 5", url: "https://getbootstrap.com/" },
  { title: "jQuerry", url: "https://jquery.com" },
  { title: "Vue.js", url: "https://vuejs.org/" },
  { title: "Tailwind", url: "https://tailwindcss.com/" },
  { title: "Node.js", url: "https://nodejs.org/" },
  { title: "Html 5", url: "https://www.w3schools.com/html/" },
  {
    title: "Css3",
    url: "https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/",
  },
  { title: "JavaScript", url: "https://www.javascript.com/" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com///1600x900/?currency/money",
  imgText: "main image description",
  linkText: "Sign in to read more…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com///1600x900/?gender/male",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com///1600x900/?gender/female",
    imageText: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title=" " sections={sections} />
        <main>
          <MainFeaturedPost
            post={mainFeaturedPost}
            className={classes.mainFeaturedPost}
          />
          <Card variant="h6">
            <Grid container spacing={5}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </Card>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
};
