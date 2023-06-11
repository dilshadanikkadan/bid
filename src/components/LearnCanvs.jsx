import React, { useState } from "react";
import styled from "styled-components";
import { mySqaudPlayersData } from "../data.js/squadData";

const Players = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 120px;
  width: 120px;
 
  display: flex;
  align-items: center;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;
const Left = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  align-items: center;

  
  
  flex-direction: column;

`;
const Rating = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: white;

`;
const BlackBall = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;

`
const InfoCantainer = styled.div`
  
`
const Right = styled.div`
  flex: 5;
  display: flex;
  align-content: center;

  flex-direction: column;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 90%;
  

`;
const Img = styled.img`
  width: 100%;
`;
const LearnCanvs = () => {
  const Draggable = require("react-draggable");
  const DraggableCore = Draggable.DraggableCore;
  const [x, setX]= useState(0)
  const [y, setY]= useState(0)
  const handleStop = (event, dragElement) => {
    setX(dragElement.x)
    setY(dragElement.y)
    console.log([x,y]);
   
  };

  return (
    <>
      {mySqaudPlayersData.map((item) => (
        <Draggable bounds={{left: 10, top: 10, right: 100, bottom: 200}}   onStop={handleStop}
   >
          <Players defaultPosition={{ x: 10, y: 10}}     position={{x: x, y:y}}  >
            <Wrapper bg={item.bg}>
              <Left>
                <InfoCantainer>

                <Rating>{item.rating}</Rating>
                <Rating>{item.position}</Rating>
                </InfoCantainer>
                <BlackBall src={item.blackball}/>
              </Left>
              <Right bg={item.img}>
                {/* <Img src={item.img} /> */}
              </Right>
            </Wrapper>
          </Players>
        </Draggable>
      ))}
      {/* <Draggable defaultPosition={{ x: 200, y: 400}} >  
       
        <div style={{border: "2px solid red", padding: "1rem", width: "30%"}}>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on the onMouseUp react event listen...</div>
        </div>
    </Draggable> */}
    </>
  );
};

export default LearnCanvs;
