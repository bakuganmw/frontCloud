import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
// import AuthContext from "../AuthProvider";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  ContinueBox,
  RouterButton,
} from "./SignInElements";
const SignIn = () => {
  // const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(document.getElementById("email").value);
      const xd = document.getElementById("email").value;
      const res = await axios.get(
        "https://insancescissorswebapp.azurewebsites.net/clients/emails/" + xd
      );
      console.log(res);
      setUser(res.data);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <Container>
          <ContinueBox>
            <RouterButton to="/home">Continue</RouterButton>
          </ContinueBox>
        </Container>
      ) : (
        <Container>
          <FormWrap>
            <Icon>Crazy Scissors</Icon>
            <Form action="#" onSubmit={handleSubmit}>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" autoComplete="off" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Confirm</FormButton>
            </Form>
          </FormWrap>
        </Container>
      )}
    </>
  );
};

export default SignIn;
