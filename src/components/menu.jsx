import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Menu = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ height: "35px" })}

    `
const MenuWrpaper = styled.div`
    border-radius: 20px;
    
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${mobile({ height: "35px" })}
    ${mobile({ width: "70%" })}

`
const Leftside = styled.div`
 flex: 5;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Menuitems = styled.p`
 font-weight: 700;
    border-right:1px solid grey;
    color: darkblue;
    font-weight: 700;
    padding: 8px 85px;
`

const Rightside = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const menu = () => {
  return (
    <>
    <Menu>
        <MenuWrpaper>
            <Leftside>
                <Menuitems>Home</Menuitems>
                <Menuitems>Shop</Menuitems>
            </Leftside>
            <Rightside>
            <Menuitems>Settings</Menuitems>
                <Menuitems>About</Menuitems>
            </Rightside>
        </MenuWrpaper>
    </Menu>

      
    </>
  )
}

export default menu
