import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Footer from './Footer';

const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

export const getRequest =  async () => await (await fetch(url)).json();

const MediaContainer = ({ type }) => {
  const { data, isFetching, error } = useQuery('fetchMedia', getRequest); 
  return (
    <SeriesWrapper>
      <div className="container">
      <div className="media">
      {error !== null && (
    <h3>Oops something went wrong..</h3>
      )}
    {
      isFetching ? 
      (<h3>Loading...</h3>) :
      (
        <div className="image-cover">
            {data.entries.filter((arr) => arr.releaseYear >= 2010 && arr.programType === type)
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((v, index) => <MovieCard data={v} key={index}/>)
            }
        </div>
      )
    }
    </div>
    </div>
    </SeriesWrapper>
  );
}


const SeriesWrapper = styled.div`
    padding-bottom: 230px;
    .container {
      background: #fff;
    }
    .media {
      margin: 70px auto;
      width: 70%;
    }
    .image-cover {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        flex: 0 20%;
        margin-bottom: 2%
      }
    }
    .image-cover img {
      height:auto;
      display:block;
      width: 100%;
    }
    @media screen and (max-width: 800px) {
      .media {
        width: 100%;
      }
      .image-cover {
        div {
          flex: 0 25%;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .image-cover {
        div {
          flex: 0 43%;
        }
      }
    }

    @media screen and (max-width: 300px) {
      .image-cover {
        div {
          flex: 1 50%;
        }
      }
    }
`;

export default MediaContainer;

