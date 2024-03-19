import styled from "styled-components"
import Logo from "./Logo"
import Nav, { NavList } from "./Nav"
import Social from "./Social"

// Styles
const Foot = styled.footer`
  background: var(--color-dark);
  padding: 75px 0 46px;
  @media screen and (max-width: 1020px) {
    padding-top: 60px;
  }
  @media screen and (max-width: 750px) {
    padding: 52px 0 38px;
    text-align: center;
  }
`
const FootText = styled.div`
  font-weight: 500;
`
const Copyright = styled.div`
  font-weight: 700;
  padding-top: 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 36px;
  .footgrid2 {
    justify-self: end;
  }
  .footgrid4 {
    justify-self: end;
	  align-self: end;
  }
  @media screen and (max-width: 1020px) {
    .footgrid1 { grid-area: 1 / 1 / 2 / 3; }
    .footgrid2 { grid-area: 2 / 1 / 3 / 3; justify-self: auto; }
    ${FootText} { grid-area: 3 / 1 / 4 / 3; margin: 0 0 30px; }
    .footgrid4 { grid-area: 4 / 2 / 5 / 3; align-self: auto; }
    ${Copyright} { grid-area: 4 / 1 / 5 / 2; padding-top: 0; }
  }
  @media screen and (max-width: 750px) {
    grid-row-gap: 48px;
    ${FootText} { margin: 0; }
    .footgrid4 { grid-area: 5 / 1 / 5 / 3; justify-self: auto; }
    ${Copyright} { grid-area: 4 / 1 / 4 / 3; padding-top: 0; }
    ${NavList} {
      display: block;
      li {
        margin: 0 0 16px;
        &:last-child { margin: 0; }
      }
    }
  }
`

const Footer: React.FC = () => {
  return (
    <Foot>
      <div className="container">
        <Grid>
          <div className="footgrid1">
            <Logo />
          </div>
          <div className="footgrid2">
            <Nav />
          </div>
          <FootText>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </FootText>
          <div className="footgrid4">
            <Social />
          </div>
          <Copyright>Copyright 2021. All Rights Reserved</Copyright>
        </Grid>
      </div>
    </Foot>
  )
}

export default Footer
