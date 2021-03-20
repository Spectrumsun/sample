import React from 'react';
import styled from 'styled-components';
import CardStyle from './Card';

const types = ['series', 'movies'];

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div className="home-content">
          <div>
        {
          types.map((type, index) => <CardStyle type={type}  key={index}/>)
        }
        </div>
      </div>
      </HomeWrapper>
    </>
  );
}


const HomeWrapper = styled.div`
  display: flex;
  .home-content {
    margin: 70px auto;
    width: 70%;
    background: #fff;
    div {
      width: 70%;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding-bottom: 350px;
    align-items: center;
    .home-content {
      width: 100%;
      margin: 0;
      div {
        margin: 10px auto;
        width: 90%;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Home;
