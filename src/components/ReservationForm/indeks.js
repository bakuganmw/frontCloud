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
import { FormOption, FormSelect } from "./ReservationFormElements";
const ReservationForm = () => {
  const [street, setStreet] = useState(1);
  const [posts, setPosts] = useState([]);
  const [distances,setDistances] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://insancescissorswebapp.azurewebsites.net/barbershops"
        );
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myLatidude = position.coords.latitude;
        const myLongitude = position.coords.longitude;
        for (let i=0; i<posts.length; i++) {
          let y = myLatidude - posts[i]?.latitude;
          let x = myLongitude - posts[i]?.longitude;
          let distance = Math.sqrt(Math.pow(x,2) +Math.pow(y,2));
          setDistances(distance.toFixed(2));
      }
      });
    } else {
      console.log("error");
    }
  }

  getLocation();
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
          <FormSelect
            name="barbershop"
            id="barbershop"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          >
            {posts.map((post) => (
              <FormOption key={post.id} value={post.id} active = {distances[post.id-1] >= Math.max(distances) && "green"}>
                {post.street}
              </FormOption>
            ))}
          </FormSelect>
          <FormLabel htmlFor="service">Service</FormLabel>
          <FormSelect name="service" id="service">
            {posts[street - 1]?.services.map((post) => (
              <option key={post.id} value={post.id}>
                {post.name}
              </option>
            ))}
          </FormSelect>
          <FormButton type="submit">Send reservation</FormButton>
        </Form>
      </FormWrap>
    </div>
  );
};

export default ReservationForm;
