import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 48px;
  width: 100%;
  position: fixed;
  top: 0;

  h1 {
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    cursor: default;
  }
`

export const Navbar = styled.nav`
  height: 100%;
  max-width: 75%;
  margin: 0 16px;

  ul {
    list-style-type: none;

    li {
      padding: 0 16px;
      float: left;

      a {
        font-size: 16px;
        letter-spacing: 2.6px;
        text-decoration: none;
        text-transform: uppercase;
        color: inherit;
      }
    }
  }

`