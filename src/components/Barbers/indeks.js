import React from "react";
import Icon1 from "../../images/barber.jpg";
import Icon2 from "../../images/svg-2.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./BarbersElements";
const Barbers = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our barber shops</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Zych shop</ServicesH2>
          <ServicesP>
            A place for all football fans. If you want a cut like your favorite
            football player, here is the best place to do it.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Swiderek shop</ServicesH2>
          <ServicesP>
            Here our barbers have a good sense of humour and you will enjoy your
            time here.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Kirsz shop</ServicesH2>
          <ServicesP>
            Here our barbers have excellent skills and have a "c sharp" eye to
            make a perfect cut.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Nang shop</ServicesH2>
          <ServicesP>A mix of western and eastern styles.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Nowakowski shop</ServicesH2>
          <ServicesP>
            A calm place where you can relax and let our hairstylist do the
            work.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Barbers;
