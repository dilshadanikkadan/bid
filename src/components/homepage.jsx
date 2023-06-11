import React from "react";
import styled from "styled-components";
import { homeData, homeDataBottom } from "../data.js/homepage";
import { mobile } from "../responsive";

const Homepage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  


`;
const HomepageWrapper = styled.div`
  height: 80vh;
  width: 95%;
  margin: 20px;

  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ margin: "0px" })}
 
  
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  height: 38vh;
  width: 90%;
`;
const Squadmanegment = styled.div`
border: 1px solid red;  
  display: flex;
  align-items: center;
  height: 38vh;
  width: 95%;

  margin: 20px;
  flex-direction: column;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.521);
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.521);
`;
const ImageContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 18vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;

  position: absolute;
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const Info = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  color: rgba(20, 132, 238, 0.932);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    ${mobile({ fontSize: "14px" })}
`;
const SquadmanegmentRound = styled.div`
  width: 130px;
  height: 130px;

  position: absolute;
  margin-top: 7%;
  background-color: white;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "80px" })}
  ${mobile({ width: "80px" })}
  ${mobile({  marginTop: "3.5%" })}
`;

const SquadmanegmentRoundimg = styled.img`
  width: 85%;
  height: 85%;
  object-fit: cover;
  border-radius: 50%;
  ${mobile({ height: "85%" })}
  ${mobile({ width: "85%" })}
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 38vh;
  width: 90%;
  margin-top: 1%;
`;
const homepage = () => {
  return (
    <>
      <Homepage>
        <HomepageWrapper>
          <Top>
            {homeData.map((item) => (
              <Squadmanegment key={item.id}>
                <ImageContainer>
                  <Image src={item.image} />
                </ImageContainer>
                <SquadmanegmentRound>
                  <SquadmanegmentRoundimg src={item.roundImage} />
                </SquadmanegmentRound>
                <Info>
                  <Title>{item.title} </Title>
                </Info>
              </Squadmanegment>
            ))}
          </Top>
          <Bottom>
            {homeDataBottom.map((item) => (
              <Squadmanegment key={item.id}>
                <ImageContainer>
                  <Image src={item.image} />
                </ImageContainer>
                <SquadmanegmentRound>
                  <SquadmanegmentRoundimg src={item.roundImage} />
                </SquadmanegmentRound>
                <Info>
                  <Title>{item.title} </Title>
                </Info>
              </Squadmanegment>
            ))}
          </Bottom>
        </HomepageWrapper>
      </Homepage>
    </>
  );
};

export default homepage;
