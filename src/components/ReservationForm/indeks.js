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
import { FormOption, FormSelect, InputResponse } from "./ReservationFormElements";

let barberId = 1;

const isDateValid = (date, takenDates) => {
  date = new Date(date).getDate();

  let free = true;
  for (let takenDate of takenDates) {
    takenDate = new Date(takenDate).getDate();
    if (date == takenDate) {
      free = false;
    }
  }

  return free;
}

const ReservationForm = () => {
  const [posts, setPosts] = useState([]);
  const [distances] = useState([]);
  const [minDistance, setMinDistance] = useState(Number.MAX_VALUE);
  const [takenDates, setTakenDates] = useState([]);
  const [dateValid, setDateValid] = useState(null);

  const validateDate = () => {
    let dateForm = document.getElementById("date");
    const isFree = isDateValid(Date.parse(dateForm.value), takenDates);

    console.log(isFree)
    setDateValid(isFree);
  }

  const getTakenDates = async () => {
    try {
      console.log("BarberId:", barberId);
      const res = await axios.get(
        `https://insancescissorswebapp.azurewebsites.net/reservations/significant-reservations-dates?barbershopId=${barberId}`
      );
      setTakenDates(res.data);
      console.log("Taken Dates:", takenDates);
    } catch (error) {
      console.log(error);
    }
  };

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
        let minimalDistance = Number.MAX_VALUE;
        for (let i = 0; i < posts.length; i++) {
          let y = position.coords.latitude - posts[i]?.latitude;
          let x = position.coords.longitude - posts[i]?.longitude;
          let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
          distances[i] = distance;
          minimalDistance = Math.min(distance, minimalDistance);
        }
        setMinDistance(minimalDistance);
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

          <FormLabel htmlFor="barbershop">Barbershop</FormLabel>
          <FormSelect
            name="barbershop"
            id="barbershop"
            value={barberId}
            onChange={(e) => {
              console.log("Barbershop ON Change!")
              barberId = e.target.value;
              getTakenDates();
            }}>
            {minDistance !== Number.MAX_VALUE && posts.map((post) => (
              <FormOption key={post.id} value={post.id} active={distances[post.id - 1] <= minDistance && "green"}>
                {post.name}
              </FormOption>
            ))}
          </FormSelect>

          <FormLabel htmlFor="service">Service</FormLabel>
          <FormSelect name="service" id="service">
            {posts[barberId - 1]?.services.map((post) => (
              <option key={post.id} value={post.id}>
                {post.name}
              </option>
            ))}
          </FormSelect>

          <FormLabel htmlFor="date">Date</FormLabel>
          <FormInput type="date" id="date" min={(new Date(Date.now() + 1 * 86400000)).toISOString().split('T')[0]} autoComplete="off" onChange={validateDate} required />
          {dateValid === true && <InputResponse success={true}>Wybrany termin jest wolny</InputResponse>}
          {dateValid === false && <InputResponse success={false}>Termin zajęty! Wybierz inny termin</InputResponse>}

          <FormButton type="submit">Send reservation</FormButton>

        </Form>
      </FormWrap>
    </div>
  );
};

export default ReservationForm;