
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './home/menu';
import FlightsPage from './home/flight';
import './App.css';
import Rightcontent from './home/rightcontent';
import HotelPage from './home/hotels';
import HolidaysPage from './home/holidays';
import BusPage from './home/bus';
import Cab from './home/cab';
import VisaPage from './home/visa';
import SupportPage from './home/support';
import ToggleableTabs from './home/sup';
import Primepage from './home/prime';
import SreachPage from './home/sreach';

import LoginPage from './home/login';


import Offerpage from './home/offer';
import CollapsibleExample from './home/booking';
import Appp from './home/hotelbook';
import SreachPagee from './home/holidaybook';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Header/>]}/>
      <Route path='/flights' element={[<Header/>,<FlightsPage/>]}/>
       <Route path='/hotels' element={[<Header/>,<HotelPage/>]}/>
       <Route path='/holidays' element={[<Header/>,<HolidaysPage/>]}/>
       <Route path='/buses' element={[<Header/>,<BusPage/>]}/>
       <Route path='/cabs' element={[<Cab/>]}/>
       <Route path='/visa' element={[<VisaPage/>]}/>
       <Route path='/support' element={[<SupportPage/>,<ToggleableTabs/>]}/>
       <Route path='/prime' element={[<Primepage/>]}/>
       <Route path='/sreach' element={[<SreachPage/>]}/>
       <Route path='/login' element={[<LoginPage/>]}/>
       <Route path='/offers' element={[<Offerpage />]}/>
       <Route path='/home' element={[<CollapsibleExample />]}/>
       <Route path='/appp' element={[<Appp />]}/>
       <Route path='/apppp' element={[<SreachPagee />]}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;