import React, { useState, useEffect } from "react";
import axios from "axios";

const ReservationsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/services")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>ReservationsPage</div>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReservationsPage;
