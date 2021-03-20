import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { navigate, useRoutes } from 'hookrouter';
import routes from '../router';
import Footer from './Footer';

const NavBar = () => {
  const routeResult = useRoutes(routes);
  const [ currentUrl, setCurrentUrl ] = useState('Titles');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const url = window.location.href;
    const path = url.split('/')[3]
    if(path !== 'series' || 'movies') {
      setCurrentUrl('Title')
    }
    setCurrentUrl(path)
  },)

  return (
    <>
    <Wrapper>
    <nav>
      <h1 onClick={() => navigate('/')}>DEMO Streaming</h1>
      <div> 
        <h4>Log in</h4>
        <h3>Start your free trial</h3>
      </div>
    </nav>
    <section>
      <div className="section-container">
        <h3>Popular {currentUrl} </h3>
      </div>
    </section>
    </Wrapper>
    {routeResult || <div>NoResource</div>}
    <Footer />
    </>
  );
};

const Wrapper = styled.div`
  background: #0079FE;
  nav {
      padding: 20px;
      margin: 0 auto;
      width: 70%;
      display: flex;
      align-items: center;
      color: #ffffff;
      justify-content: space-between;
      cursor: pointer;
      box-sizing: border-box;
      div {
        display: flex;
        align-items: center;
        h4 {
          margin-right: 20px;
        }
        h3 {
          background: #000000;
          padding: 10px;
        }
      }
  }
  section {
    background: #414141;
    color: #ffffff;
    justify-content: space-around;
  }
  .section-container {
    padding: 20px;
    margin: 0 auto;
    width: 70%;
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    nav,
    .section-container{
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    nav {
      // padding: 20px;
      align-items: flex-start;
      color: #ffffff;
      // justify-content: left;
      flex-direction: column;
      h1,h4 {
        margin-bottom: 10px;
      }
      div {
        align-items: flex-start;
        flex-direction: column;
        h4 {
          margin-right: 15px;
        }
      }
  }
  }

`;


export default NavBar;