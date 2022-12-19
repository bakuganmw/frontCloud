import React, { useEffect, useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesTable,
  ServicesWrapper,
} from "./ServicesElements";
import axios from "axios";
const Services = () => {
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
  const arr = posts[0]?.services.map((service) => {
    return (
      <tr>
        <td key={service.id}>{service.name}</td>
        <td>{service.name}</td>
        <td>{service.description}</td>
      </tr>
    );
  });
  return (
    <>
      <ServicesContainer lightBg="#f9f9f9" id="services">
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <select name="stylists" id="stylists">
            {posts.map((post) => (
              <option key={post.id}>{post.name}</option>
            ))}
          </select>
          <ServicesTable>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>description</th>
            </tr>
            {arr}
          </ServicesTable>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
