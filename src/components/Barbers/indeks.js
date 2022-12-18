import React, { useState, useEffect } from "react";
import Icon1 from "../../images/barber.jpg";
import Icon2 from "../../images/svg-2.jpg";
import axios from "axios";
import {
  BarbersContainer as BarbersShopContainer,
  BarbersH1 as BarbersShopH1,
  BarbersCard as BarbersShopCard,
  BarbersH2 as BarbersShopH2,
  BarbersIcon as BarbersShopIcon,
  BarbersP as BarbersShopP,
  BarbersWrapper as BarbersShopWrapper,
} from "./BarbersElements";
const Barbers = () => {
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
    <BarbersShopContainer>
      <BarbersShopH1>Our barber shops</BarbersShopH1>
      <BarbersShopWrapper>
        <BarbersShopCard>
          <BarbersShopIcon src={Icon1} />
          <BarbersShopH2>{posts[0]?.name}</BarbersShopH2>
          <BarbersShopP>{posts[0]?.description}</BarbersShopP>
        </BarbersShopCard>
        <BarbersShopCard>
          <BarbersShopIcon src={Icon2} />
          <BarbersShopH2>{posts[1]?.name}</BarbersShopH2>
          <BarbersShopP>{posts[1]?.description}</BarbersShopP>
        </BarbersShopCard>
        <BarbersShopCard>
          <BarbersShopIcon src={Icon1} />
          <BarbersShopH2>{posts[2]?.name}</BarbersShopH2>
          <BarbersShopP>{posts[2]?.description}</BarbersShopP>
        </BarbersShopCard>
        <BarbersShopCard>
          <BarbersShopIcon src={Icon1} />
          <BarbersShopH2>{posts[3]?.name}</BarbersShopH2>
          <BarbersShopP>{posts[3]?.description}</BarbersShopP>
        </BarbersShopCard>
        <BarbersShopCard>
          <BarbersShopIcon src={Icon1} />
          <BarbersShopH2>{posts[4]?.name}</BarbersShopH2>
          <BarbersShopP>{posts[4]?.description}</BarbersShopP>
        </BarbersShopCard>
      </BarbersShopWrapper>
    </BarbersShopContainer>
  );
};

export default Barbers;
