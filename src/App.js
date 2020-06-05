import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import CustomerProfile from './components/CustomerProfile';
import OrderSummary from './components/OrderSummary';
import Navbar from './components/Navbar';

function App() {

  const [customerData, setCustomerData] = useState('');

  useEffect(() => {
    axios.get('https://indapi.kumba.io/webdev/assignment')
      .then(res => {
        setCustomerData(res.data);
        // console.log(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <div className=''>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <OrderSummary customerData={customerData}></OrderSummary>
          </Route>
          <Route path='/profile'>
            <CustomerProfile profile={customerData.user}></CustomerProfile>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
