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
import getUser from "../storage";
const SignIn = () => {
  // const { setAuth } = useContext(AuthContext);
const sessionUser = getUser();
  const [user, setUser] = useState([]);
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
    }
  };
  async function handleCallBackResponse(response) {
    let varObject = jwt_decode(response.credential);
    console.log(varObject);
    setUser(varObject);
    const {email} = varObject;
    
    try {
      const res = await axios.get(
        `https://insancescissorswebapp.azurewebsites.net/clients/emails/${email}`
      );
      console.log(res);
      sessionUser.id = res.data.id;
      sessionUser.email = res.data.email;
      sessionUser.isAdmin = res.data.is_admin;
    } catch (err) {
      console.log(err);
    }
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
    });
  },);

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
        </FormWrap>
        </Container>
      )}
    </>
  );
};

export default SignIn;
