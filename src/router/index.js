import React from 'react';
import Home from '../component/Home'
import Series from '../component/Series';
import Movies from '../component/Movies';

const routes = {
  '/': () => <Home />,
  '/series': () => <Series />,
  '/movies': () => <Movies />
};


export default routes;