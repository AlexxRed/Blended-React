import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: block;
  // background: linear-gradient(#003a3efc, #7ce6f42b);
  background: #262626;
`;

export const HomepageIcon = styled(NavLink)`
  display: block;
  padding: 10px 0;
  max-width: 150px;
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  color: #ffffff;
  transition: color 400ms ease;
  &:hover {
    color: #ff8a65;
  }
  &.active {
    color: #ff8a65;
    pointer-events: none;
  }
`;

export const Footer = styled.footer`
  display: block;
  background: #262626;
  text-align: center;
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  list-style: none;
`;

export const NavHomepage = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #ffffff;
  transition: color 400ms ease;
  &:hover {
    color: #ff8a65;
  }
  &.active {
    color: #ff8a65;
    pointer-events: none;
  }
`;

export const NavAddContact = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #ffffff;

  transition: color 400ms ease;
  &:hover {
    color: #ff8a65;
  }
  &.active {
    color: #ff8a65;
    pointer-events: none;
  }
`;

export const MainContent = styled.main`
  background: rgb(255, 255, 255);
  background: #b6b6b6;
  min-height: 84.3vh;
  font-family: Roboto;
  padding: 20px 0;
`;
