import styled from "styled-components";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Email, ShoppingCart } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { mobile } from "../responsive";

import { Badge } from "@mui/material";

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  ${mobile({ height: "60px" })}
`;
const Left = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 15px;
`;
const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Coin = styled.p`
  color: gold;
  font-weight: 700;
  font-size: 19px;

  border-right: 1px solid gray;
  padding: 0px 10px;
  ${mobile({ padding: " 0px 5px" })}
  
`;
const CoinImg = styled.img`
  width: 23px;
  height: 23px;
`;
const GpWrpapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Gp = styled.p`
  color: rgba(9, 51, 185, 0.911);
  font-weight: 700;
  font-size: 19px;

  border-right: 1px solid gray;
  padding: 0px 10px;
  ${mobile({ padding: " 0px 5px" })}
`;

const Center = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;





const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function App() {
  return (
    <>
      <Navbar>
        <NavbarWrapper>
          <Left>
            <CoinWrapper>
              <CoinImg src="../img/coinEDITED.png" />
              <Coin>12k</Coin>
            </CoinWrapper>
            <GpWrpapper>
              <MonetizationOnIcon
                style={{ color: " rgba(9, 51, 185, 0.911)" }}
              />
              <Gp>55563872</Gp>
            </GpWrpapper>
          </Left>
          <Center>
            <PersonIcon style={{ color: " rgb(0, 111, 185)", fontSize: 43  }} />

            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "red",
                },
              }}
            >
              <Email style={{ color: " rgb(0, 111, 185)", fontSize: 36 }} />
            </Badge>
          </Center>
          <Right>

            <Badge badgeContent={4} sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "red",
                },
              }}>
              <ShoppingCart
                style={{ color: " rgb(0, 111, 185)", fontSize: 36 }}
              />
            </Badge>
          </Right>
        </NavbarWrapper>
      </Navbar>
    </>
  );
}

export default App;
