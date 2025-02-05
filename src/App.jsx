import React from 'react';
import './App.css';

import Content from './Componant/Content';
import Top from './Componant/Top';
import Calendar from './Componant/Calendar';
import { BookingLocation } from './Componant/BookingLocation';


const App = () => {
  return (
    <div className='bg-gradient-to-b from-blue-50 to-blue-300'>
      <Top/>
      <Content/>
      <Calendar/>
      <BookingLocation/>
    </div>
  );
};
export default App;
