import {  Outlet } from "react-router-dom";
import { SiReact } from "react-icons/si";

import {
  Header,
  HomepageIcon,
  Footer,
  Navigation,
  NavHomepage,
  NavAddContact,
  MainContent,
} from "./Layout.styled";

export const Layout = () => {
  return (
    <div>
      <Header>
        <nav className="container">
          <Navigation>
            <li>
              <HomepageIcon to="/">
                <SiReact size="22px" />
              </HomepageIcon>
            </li>
            <li>
              <NavHomepage to="/">HOME</NavHomepage>
            </li>
            <li>
              <NavAddContact to="/add">ADD CONTACT</NavAddContact>
            </li>
          </Navigation>
        </nav>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer className="container">footer</Footer>
    </div>
  );
};
