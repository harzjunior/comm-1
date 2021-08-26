import { SignIn } from "./sign_in/SignIn";
import SignInSide from "./sign_in_side/SignInSide";
import { SignUp } from "./sign_up/SignUp";
import { Pricing } from "./pricing/Pricing";
import { StickyFooter } from "./sticky_footer/StickyFooter";
import { Album } from "./album/Album";
import SignUpSide from "./sign_up_side/SignUpSide";
import { Blog } from "./blog/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Sidebar } from "./side-bar/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signinside" component={SignInSide} />
          <Route path="/signupside" component={SignUpSide} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/album" component={Album} />
          <Route path="/footer" component={StickyFooter} />
          <Route path="/" component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
