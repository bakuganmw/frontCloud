import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
// import AuthContext from "../AuthProvider";
import {
  Container,
  ContinueBox,
  Form,
  FormButton,
  FormWrap,
  Icon,
  RouterButton,
} from "./SignInElements";
const SignIn = () => {
  // const { setAuth } = useContext(AuthContext);

  const [user, setUser] = useState([]);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://insancescissorswebapp.azurewebsites.net/barbershops"
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
    }
  };
  function handleCallBackResponse(response) {
    let varObject = jwt_decode(response.credential);
    console.log(varObject);
    setUser(varObject);
  }
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "351351467106-rdi7si3g9d0episle0oge9u2ue3fad00.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIdDiv"), {
      theme: "outline",
      size: "large",
      onclick: { handleSubmit },
    });
  }, []);

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
            <div id="signIdDiv"></div>
            <FormButton type="submit">Confirm</FormButton>
          </Form>
          <RouterButton to="/home">Continue</RouterButton>
        </FormWrap>
        </Container>
      )}
    </>
  );
};

export default SignIn;
