import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "../SignIn/SignInElements";
import { FormOption, FormSelect, InputResponse, ButtonResponse } from "./ReservationFormElements";
import getUser from "../storage";

let barberShopId = 1;
let serviceId = 1;
let takenDates = []

const datesContain = (dates, date) => {
  let contain = false;

  for (let takenDate of dates) {
    takenDate = new Date(takenDate).getDate();
    if (date == takenDate) {
      contain = true;
    }
  }

  return contain;
}

const dateToDayString = (date) => {
  date = new Date(date);
  return date.toISOString().split('T')[0];
}

const todayPlus = (days) => {
  return (new Date(Date.now() + days * 86400000));
}

const ReservationForm = () => {
  const [posting, setPosting] = useState(false);
  const [posts, setPosts] = useState([]);
  const [distances] = useState([]);
  const [minDistance, setMinDistance] = useState(Number.MAX_VALUE);
  const [dateValid, setDateValid] = useState(null);
  const [success, setSuccess] = useState(null);
  const user = getUser();

  const calculateClosestDate = () => {
    console.log(barberShopId, takenDates)
    let closestDate;
    
    let i = 1;
    while (true) {
      closestDate = todayPlus(i);

      if (!datesContain(takenDates, closestDate.getDate())) {
        break;
      }

      i++;
    }

    return closestDate;
  }

  const validateDate = () => {
    let dateForm = document.getElementById("date");
    let dateFormDate = new Date(Date.parse(dateForm.value))
    const isFree = !datesContain(takenDates, dateFormDate.getDate());

    setDateValid(isFree);
  }

  const getTakenDates = async () => {
    try {
      const res = await axios.get(
        `https://insancescissorswebapp.azurewebsites.net/reservations/significant-reservations-dates?barbershopId=${barberShopId}`
      );
      takenDates = res.data;
    } catch (error) {
      console.log(error);
    }

    const dateForm = document.getElementById("date");
    dateForm.value = dateToDayString(calculateClosestDate());

    validateDate();
  };

  const placeReservation = async () => {
    let dateForm = document.getElementById("date");
    const date = dateForm.value;
    const userId = user.id;

    try {
      const res = await axios.post(
        "http://localhost:8080/reservations/create",
        {
          day: date,
          client_id: userId,
          service_id: serviceId,
          barbershop_id: barberShopId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      console.log(res.status);
      console.log(res.data);

      setSuccess(true);
    } catch (error) {
      console.log(error);
      setSuccess(false);
    }
  }

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
    <>
      {success ? (
        <Container>
          <ContinueBox>
            <RouterButton to="/home">Succesfully placed reservation!</RouterButton>
          </ContinueBox>
        </Container>
      ) : (
        <div>
          <FormWrap>
            <Icon>Reservation</Icon>
            <Form>

              <FormH1>Reserve your visit</FormH1>
              <FormLabel htmlFor="name">E-mail</FormLabel>
              <FormInput type="text" id="name" defaultValue={user.email} readOnly={user.email != ""} required />

              <FormLabel htmlFor="barbershop">Barbershop</FormLabel>
              <FormSelect
                name="barbershop"
                id="barbershop"
                value={barberShopId}
                onChange={(e) => {
                  barberShopId = e.target.value;
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
                {posts[barberShopId - 1]?.services.map((post) => (
                  <option key={post.id} value={post.id} onChange={(e) => serviceId = e.target.value}>
                    {post.name}
                  </option>
                ))}
              </FormSelect>

              <FormLabel htmlFor="date">Date</FormLabel>
              <FormInput type="date" id="date" min={dateToDayString(todayPlus(1))} autoComplete="off" onChange={validateDate} required />
              {dateValid === true && <InputResponse success={true}>Wybrany termin jest wolny</InputResponse>}
              {dateValid === false && <InputResponse success={false}>Termin zajęty! Wybierz inny termin</InputResponse>}

              <FormButton type="button" disabled={dateValid !== true} onClick={placeReservation}>Place Reservation</FormButton>
              {posting && <ButtonResponse>Placing reservation...</ButtonResponse>}

            </Form>
          </FormWrap>
        </div>)}
    </>
  );
};

export default ReservationForm;