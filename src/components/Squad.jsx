import React, { useState } from "react";
import styled from "styled-components";
import Canvas from './Canvas'
import {
  FormationData,
  SquadDataCenter,
  SquadDataCenterDifender,
  SquadDataCenterKeeper,
  SquadDataCenterMid,
  SquadDataLeft,
  SubPlayersData,
} from "../data.js/squadData";
import { MainBg } from "../data.js/squadData";
import mainbg from "../img/F.png";
import { Button, Modal } from "flowbite-react";
import { CurrencyExchangeOutlined } from "@mui/icons-material";
import LearnCanvs from "./LearnCanvs";
const MySquad = styled.div`
  display: flex;
  align-items: center;

  background: url(img/F.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 90vh;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 18;

  margin: 5px;
`;
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.863);
  height: 82vh;
  width: 90%;
  border-radius: 20px;
`;
const First = styled.div`
  width: 82%;
  flex: 4;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;
const Image = styled.div`
  height: 90%;
  width: 90%;

  background: url(${(props) => props.bg});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  background-origin: none;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: none;
`;
const Second = styled.div``;
const Third = styled.div``;
const Fourth = styled.div``;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex: 90;

  margin: 5px;
`;
const CenterWraper = styled.div`
  height: 85vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Top = styled.div`
  flex: 51;

  width: 90%;
  margin: 6px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const One = styled.div`
  width: 90%;
  margin: 6px 0px;
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`;
const Striker = styled.div`
  border-radius: 9px;
  width: 13%;
  height: 15vh;
  margin: 6px 0px;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Strikerimg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;
const Two = styled.div`
  width: 90%;
  margin: 6px 0px;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: end;
`;
const Mid = styled.div`
  border-radius: 9px;
  width: 13%;
  height: 13vh;
  margin: 6px 0px;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MidImg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;
const Middle = styled.div`
  flex: 40;

  width: 90%;
  margin: 6px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`;
const Diffneder = styled.div`
  border-radius: 9px;
  width: 12%;
  height: 13vh;
  margin: 6px 0px;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Diffnederimg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;
const Bottom = styled.div`
  flex: 24;

  width: 90%;
  margin: 6px 0px;
  display: flex;
  justify-content: center;
  align-items: end;
`;
const Keeper = styled.div`
  border-radius: 9px;
  width: 12%;
  height: 13vh;
  margin: 6px 0px;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Keeperimg = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 20;

  margin: 5px;
`;
const StrenghtWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.863);
  height: 78vh;
  width: 92%;
  border-radius: 20px;
`;
const Sprit = styled.h3`
  color: white;
`;
const FirstRow = styled.div`
  width: 92%;
  flex: 5;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  width: 160px;
  height: 180px;
  position: absolute;
  background: url(../img/newshield.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TeamSprit = styled.span`
  position: relative;
  font-size: 38px;
  color: white;
  font-weight: 900;
  top: -10px;
`;
const SecondRow = styled.div`
  width: 92%;
  flex: 4;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Teamstrenght = styled.h3`
  color: white;
  font-weight: 200;
  font-size: 20px;
`;
const TeamstrenghtValue = styled.span`
  color: white;
  font-weight: 600;
  font-size: 27px;
  margin-top: 9px;
`;
const ThirddRow = styled.div`
  width: 92%;
  flex: 4;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TeamCost = styled.h3`
  color: white;
  font-weight: 200;
  font-size: 20px;
`;
const TeamValue = styled.span`
  color: white;
  font-weight: 600;
  font-size: 27px;
  margin-top: 9px;
`;
const FourthdRow = styled.div`
  width: 92%;
  flex: 4;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Formation = styled.h3`
  color: white;
  font-weight: 200;
  font-size: 20px;
`;
const FormationMode = styled.span`
  color: white;
  font-weight: 600;
  font-size: 27px;
  margin-top: 9px;
`;

const FormationMOdal = styled.div`
  position: fixed;
  z-index: 1;

  bottom: ${(props) => props.Isbottom};

  left: 50%;

  transform: translate(-50%);
  width: 38%;
  height: 77vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  transition: all 0.3s ease;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FormationH3 = styled.h3`
  font-weight: 800;
  font-size: 30px;
`;
const ModalUp = styled.div`
  flex: 3;
  width: 98%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalMiddle = styled.div`
  width: 98%;

  flex: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Foramtions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid grey;
  margin-top: 17px;
  height: 70px;
  width: 95%;
`;
const ForamationP = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: blue;
`;
const ModalDown = styled.div`
  flex: 3;
  width: 98%;
  display: flex;

  justify-content: center;
`;
const BackBtn = styled.button`
  color: black;
  background-color: yellow;
  width: 90%;
  border: none;
  font-size: 30px;
  font-weight: 700;
`;

const Substitute = styled.div`
  position: absolute;
  height: 88vh;
  width: 12%;
  top: 90px;
  left: ${(props) => props.sub};
  background: url(../img/whitebg.avif);
  transition: all 0.3s ease;
`;

const SubLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 18;
  

  margin: 5px;
`;
const SubLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;


  height: 75vh;
  width: 90%;
  border-radius: 20px;
  
`;
const SubPlayers = styled.div`
  width: 82%;
   height: 150px;

  display: flex;
  

   
 
`;


const SubPlayersImgConatiner = styled.div`
  height: 85%;
  width: 85%;

  background: url(${(props) => props.bg});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  background-origin: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const SubPlayersInfo = styled.div`
  flex: 8;
 
  height: 85%;
  display: flex;
  align-items: center;
  
  flex-direction: column;
`
const BlackBall = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`
const InfoCantainer = styled.div`
  
`
const Postion = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: white;
`
const SubPlayersImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: none;
  flex: 9px;
`;
const SubHeadingWrapper = styled.h3`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: lightgrey;
  padding: 0px  66px;
  margin-left: 19px;
  height: 60px;
  
`
const SubHeading = styled.h3`
  font-weight: 700;
  font-size: 20px;
`

const Squad = () => {
  const [foramtion, setFormation] = useState(false);
  const [Isbottom, SetBottom] = useState("-800px");
  const [sub, SetSub] = useState("-400px");
  const [subsitute,Setsubsitute]= useState(SubPlayersData)
  const [DataStriker,SetDataStriker]= useState(SquadDataCenter)
  const [subArray,setSubarray]= useState([])
  const handleClick = (id) => {
    if (id === 2) {
      setFormation(true);
      SetBottom("15px");
    }
    if (id === 3) {
      SetSub("5px");
    }
  };
  const removeModel = () => {
    SetBottom("-800px");
  };
  const removeSub = () => {
    SetSub("-400px");
  };
  const makeSub = ()=>{
    
  }
  const AddtoSub = (item)=>{
   

 
    return setSubarray([...subArray,item] )
   
   
   
    
  }
  if(subArray.length === 2){
    
      
    // if (!SquadDataCenter.includes()) {
      
    //   arr.push(str);
    // }
    SquadDataCenter.push(subArray[1],subArray[0])
   
    SquadDataCenter.splice(0,2 )

    console.log(SquadDataCenter);
   
    
  }
  // console.log(subArray);
  var  arrLength = subArray.length;
  if(arrLength > 2){
      subArray.splice( 0, arrLength - 2);
  }
  return (
    <>
      <MySquad>
        <Left>
          <LeftWrapper>
            {SquadDataLeft.map((item) => (
              <First>
                <Image bg={item.bg}>
                  <Img onClick={() => handleClick(item.id)} src={item.img} />
                </Image>
              </First>
            ))}
          </LeftWrapper>
        </Left>

        <Center onClick={() => removeSub()}>
          {/* <CenterWraper>
            <Top>
              <CurrencyExchangeOutlined  onClick={() => makeSub()}  style={{color:"white",fontSize:"45px"}}/>
              <One>
                {DataStriker.map((item) => (
                  <Striker onClick={()=> AddtoSub(item)} bg={item.bg}>
                    <Strikerimg src={item.img} />
                  </Striker>
                ))}
              </One>

              <Two>
                {SquadDataCenterMid.map((item) => (
                  <Mid bg={item.bg}>
                    <MidImg src={item.img} />
                  </Mid>
                ))}
              </Two>
            </Top>

            <Middle>
              {SquadDataCenterDifender.map((item) => (
                <Diffneder bg={item.bg}>
                  <Diffnederimg src={item.img} />
                </Diffneder>
              ))}
            </Middle>

            <Bottom>
              {SquadDataCenterKeeper.map((item) => (
                <Keeper bg={item.bg}>
                  <Keeperimg src={item.img} />
                </Keeper>
              ))}
            </Bottom>
          </CenterWraper> */}
          <LearnCanvs/>
        </Center>

        <Right>
          <StrenghtWrapper>
            <Sprit>Team Spirit</Sprit>
            <FirstRow>
              <ImageContainer>
                <TeamSprit>96</TeamSprit>
              </ImageContainer>
            </FirstRow>

            <SecondRow>
              <Teamstrenght>Team Strength</Teamstrenght>
              <TeamstrenghtValue>2345</TeamstrenghtValue>
            </SecondRow>
            <ThirddRow>
              <TeamCost>Value</TeamCost>
              <TeamValue>400/600</TeamValue>
            </ThirddRow>
            <FourthdRow>
              <Formation>Offensive</Formation>
              <FormationMode>4-1-2-3</FormationMode>
            </FourthdRow>
          </StrenghtWrapper>
        </Right>
      </MySquad>

      <FormationMOdal Isbottom={Isbottom}>
        <ModalUp>
          <FormationH3>FORMATION</FormationH3>
        </ModalUp>
        <ModalMiddle>
          {FormationData.map((item) => (
            <Foramtions>
              <ForamationP>{item.Formation}</ForamationP>
            </Foramtions>
          ))}
        </ModalMiddle>
        <ModalDown>
          <BackBtn onClick={() => removeModel()}>Cancel</BackBtn>
        </ModalDown>
      </FormationMOdal>

      <Substitute sub={sub}>
        <SubLeft>
          <SubLeftWrapper>
          <SubHeadingWrapper>
                  <SubHeading>Substitute</SubHeading>
                </SubHeadingWrapper>
            {subsitute.map((item) => (
              <SubPlayers>
              
                <SubPlayersImgConatiner bg={item.bg}>
                <SubPlayersInfo>
                  <InfoCantainer>

                  <Postion>LWF</Postion>
                  <Postion>96</Postion>
                  </InfoCantainer>
                  <BlackBall src={item.blackball}/>
                 
                </SubPlayersInfo>
                  <SubPlayersImg
                    onClick={() => handleClick(item.id)}
                    src={item.img}
                  />
                </SubPlayersImgConatiner>
              </SubPlayers>
            ))}
          </SubLeftWrapper>
        </SubLeft>
      </Substitute>
    </>
  );
};

export default Squad;
