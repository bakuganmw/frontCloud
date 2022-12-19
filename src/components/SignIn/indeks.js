import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/Home">Crazy Scissors</Icon>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
