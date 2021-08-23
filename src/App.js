import { SignIn } from "./sign_in/SignIn";
import SignInSide from "./sign_in_side/SignInSide";
import { SignUp } from "./sign_up/SignUp";
import { SignUpSide } from "./sign_up_side/SignUpSide";
import { Pricing } from "./pricing/Pricing";
import { StickyFooter } from "./sticky_footer/StickyFooter";
import { Album } from "./album/Album";
import { Blog } from "./blog/Blog";
// import { Sidebar } from "./side-bar/Sidebar";

function App() {
  return (
    <>
      {/* <SignIn />
      <SignUp />
      <SignInSide />
      <SignUpSide />
      <Pricing />
      <Album /> */}
      <Blog />
      <StickyFooter />
    </>
  );
}

export default App;
