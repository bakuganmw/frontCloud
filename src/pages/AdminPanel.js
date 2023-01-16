import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/indeks";
import ReservationNavbar from "../components/ReservationNavbar/indeks";
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
} from "../components/SignIn/SignInElements";
import axios from "axios";
import { ServicesTable } from "../components/Services/ServicesElements";
const AdminPanel = () => {
  const [posts, setPosts] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://insancescissorswebapp.azurewebsites.net/services"
        );
        console.log(res);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addService = async () => {
    let nameService = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    console.log(nameService)
    console.log(description)
    try {
      const res = await axios.post(
        "https://insancescissorswebapp.azurewebsites.net/services/create",
        {
          name: nameService,
          description: description,
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

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ReservationNavbar toggle={toggle} />
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" id="name" autoComplete="off" required/>
        <FormLabel htmlFor="text">Description</FormLabel>
        <FormInput type="text" id="description" autoComplete="off" required />
        <FormButton type="button" onClick={addService}>Add a service</FormButton>
      </Form>
      <ServicesTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts && posts?.map(( post ) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td><button>X</button></td>
            </tr>
          ))}
        </tbody>
      </ServicesTable>
    </>
  );
};

export default AdminPanel;
