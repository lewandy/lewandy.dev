import styled from 'styled-components';

const TheHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;

  @media (min-width: 1024px) {
    justify-content: space-around;
  }

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

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#tech">Technologies</a>
      </li>
      <li>
        <a href="#stack">Contact me</a>
      </li>
    </ul>
  </nav>
);

export default function Header() {
  return (
    <TheHeader>
      <Logo>Lewandy Diloné</Logo>
      <Nav />
    </TheHeader>
  );
}
