import { React, useState, toast } from "react";
import * as Components from "../register&login/index";
import "../../cssfiles/login.css";
import api from "../../api/index";

const Loginsign = () => {
  const [signIn, toggle] = useState(true);
  // const nav = useNavigate();
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleContinue = () => {
    // e.prevantDefault();
    console.log("got here?");
    api("post", "users/", {
      username: user?.username,
      first_name: user?.firstName,
      last_name: user?.lastName,
      email: user?.email,
      password: user?.password,
      confirmPassword: user?.confirmPassword,
    })
      .then(() => {
        toast.success("User Created");
        // nav("/#");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  console.log("usernmae", user);

  return (
    <>
      <div className="main" id="login">
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                name="username"
                value={user.user}
                type="text"
                placeholder="Username"
                onChange={handleChange}
              />
              <Components.Input
                name="firstName"
                value={user.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
              />
              <Components.Input
                type="text"
                name="lastName"
                value={user.lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
              <Components.Input
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <Components.Input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <Components.Input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
              <button type="submit" onClick={handleContinue}>
                Sign Up
              </button>
            </Components.Form>
          </Components.SignUpContainer>
          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button>Sigin In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sigin Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </>
  );
};

export default Loginsign;
