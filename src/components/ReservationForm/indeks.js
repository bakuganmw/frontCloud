import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from "../SignIn/SignInElements";
import { FormSelect } from "./ReservationFormElements";
const ReservationForm = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://insancescissorswebapp.azurewebsites.net/barbershops"
        );
        console.log(res);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <FormWrap>
        <Icon>Crazy Scissors</Icon>
        <Form>
          <FormH1>Reserve your visit</FormH1>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" autoComplete="off" required />
          <FormLabel htmlFor="date">Date</FormLabel>
          <FormInput type="date" id="date" autoComplete="off" required />
          {/* <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required /> */}
          <FormLabel htmlFor="barbershop">Barbershop</FormLabel>
          <FormSelect name="barbershop" id="barbershop">
            <option value={posts[0]?.street}>{posts[0]?.street}</option>
            <option value={posts[1]?.street}>{posts[1]?.street}</option>
            <option value={posts[2]?.street}>{posts[2]?.street}</option>
            <option value={posts[3]?.street}>{posts[3]?.street}</option>
            <option value={posts[4]?.street}>{posts[4]?.street}</option>
          </FormSelect>
          <FormLabel htmlFor="service">Service</FormLabel>
          <FormSelect name="service" id="service">
            <option value={posts[0]?.services[0]?.name}>
              {posts[0]?.services[0]?.name}
            </option>
            {/* <option value={posts[1]?.street}>{posts[1]?.street}</option>
              <option value={posts[2]?.street}>{posts[2]?.street}</option>
              <option value={posts[3]?.street}>{posts[3]?.street}</option>
              <option value={posts[4]?.street}>{posts[4]?.street}</option> */}
          </FormSelect>
          <FormButton type="submit">Send reservation</FormButton>
        </Form>
      </FormWrap>
    </div>
  );
};

export default ReservationForm;
