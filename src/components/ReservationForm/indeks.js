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
  const [street, setStreet] = useState(1);
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
          <FormLabel htmlFor="barbershop">Barbershop</FormLabel>
          <FormSelect name="barbershop" id="barbershop" value={street}
            onChange={(e) => setStreet(e.target.value)}>
          {posts.map((post) => (
              <option key={post.id} value={post.id}>
                {post.street}
              </option>
            ))}
          </FormSelect>
          <FormLabel htmlFor="service">Service</FormLabel>
          <FormSelect name="service" id="service">
            {posts[street-1]?.services.map((post) => (
                <option key={post.id} value={post.id}>{post.name}</option>
              ))}
           
          </FormSelect>
          <FormButton type="submit">Send reservation</FormButton>
        </Form>
      </FormWrap>
    </div>
  );
};

export default ReservationForm;
