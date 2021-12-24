import styled from 'styled-components';

const TheHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;

  ul {
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }

  li {
    list-style: none;
  }

  nav {
    font-size: large;
    font-weight: bold;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: large;
`;

export default function Header() {
  return (
    <TheHeader>
      <Logo>LEWANDY DILONE</Logo>
      <nav>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#stack">TECH STACK</a>
          </li>
        </ul>
      </nav>
    </TheHeader>
  );
}
