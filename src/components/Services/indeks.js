import React, { useEffect, useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesTable,
  ServicesWrapper,
} from "./ServicesElements";
import axios from "axios";
const Services = () => {
  const [service, setService] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ServicesContainer lightBg="#f9f9f9" id="services">
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <select
            name="stylists"
            id="stylists"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>Choose a barbershop</option>
            {posts.map((post) => (
              <option key={post.id} value={post.id}>
                {post.name}
              </option>
            ))}
          </select>
          {loading && <div>loading</div>}
          <ServicesTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              {posts[service - 1]?.services.map(({ id, name, description }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </ServicesTable>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
