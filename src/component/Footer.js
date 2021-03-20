import React from 'react';
import styled from 'styled-components';
import facebook from '../assets/facebook-white.svg'
import instagram from '../assets/instagram-white.svg'
import twitter from '../assets/twitter-white.svg'
import AppleStore from '../assets/app-store.svg';
import GoogleStore from '../assets/play-store.svg';
import WindowsStore from '../assets/windows-store.svg';

const Footer = () => (
  <FooterStyle>
    <div className="footer-container">
    <ul>
      <li>Home</li>
      <li className="footer-line"> | </li>
      <li>Terms and Conditions</li>
      <li className="footer-line"> | </li>
      <li>Privacy Policy</li>
      <li className="footer-line"> | </li>
      <li>Collection Statement</li>
      <li className="footer-line"> | </li>
      <li>Help</li>
      <li className="footer-line"> | </li>
      <li>Manage Account</li>
    </ul>
    <p>Copyright &#xa9; DEMO Streaming. All Right Reserved</p>
    <div className="footer-cover">
      <div className="social-media">
        <img 
          src={facebook} 
          alt="facebook"
        />
        <img 
          src={twitter} 
          alt="twitter"
          style={{width: '10%'}}
        />
        <img 
          src={instagram} 
          alt="instagram"
        />
        
    </div>
    <div className="app-store">
        <img 
          src={AppleStore} 
          alt="Apple Store"
        />
        <img 
          src={GoogleStore} 
          alt="Google Store"
        />
        <img 
          src={WindowsStore} 
          alt="Windows Store"
        />
      </div>
    </div>
  </div>
  </FooterStyle>
)

export default Footer;

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #1E1E1E;
  color: #ffffff;
  padding: 50px;
  box-sizing: border-box;
  z-index: -1;

  .footer-container {
    margin: 0 auto;
    width: 70%;
  }
  ul {
    color: #C4C6C5;
    list-style-type: none;
    display: flex;
    margin-bottom: 20px;
    .footer-line {
      margin: 0px 10px 0px 10px;
    }
  }
  p{
    color: #949DA6;
  }

  .footer-cover {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .app-store,
    .social-media {
      display: flex;
      justify-content: space-between;
      width: 20%;
      img {
        width: 7%;
        display: flex;
      }
    }
    .app-store {
      width: 30%;
      img {
        width: 30%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .footer-container {
      width: 100%;
    }
  }

  @media screen and (max-width: 647px) {
    padding: 10px;
    ul {
      flex-direction: column;
      text-align: left;
      .footer-line {
        display: none;
      }
      li {
        font-size: 13px;
        margin-bottom: 10px;
      }
    }
    p {
      font-size: 13px;
    }
    .footer-cover {
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      .social-media{
        padding: 5px;
      }
    }
  }
`;