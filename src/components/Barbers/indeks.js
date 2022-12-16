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
      <ServicesH1>Our barbers</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Sebastian Zych</ServicesH2>
          <ServicesP>
           Quick and swift with a blade.He makes perfect cuts for men.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Jakub Świderek</ServicesH2>
          <ServicesP>
            He has a good sense of fashion and sense of humour.You will not be bored with him.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Nikodem Kirsz</ServicesH2>
          <ServicesP>
            A very intelligent and expierienced hairstylist. You will be pleased with his work.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Andrzej Nang</ServicesH2>
          <ServicesP>
            A mix of western and eastern styles.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Kacper Nowakowski</ServicesH2>
          <ServicesP>
            Our wisest and the most expierienced barber.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Barbers;
