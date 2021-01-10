import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from "../../assets/Temp Logo Large.png";

import useLocalStorage from "../../hooks/helpers/useLocalStorage";

import { LOCAL_STORAGE_KEY } from "../../constants";

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ _, setStoredToken ] = useLocalStorage(LOCAL_STORAGE_KEY);

  function login(e) {
    e.preventDefault();

    axios({
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/auth/login',
      method: 'post',
      data: {
        email,
        password
      }
    }).then(({ data }) => {
      console.log('data', data)
      setStoredToken(data.authToken);
      window.location = "/home";
    });
  }

  return (<main className="flex h-screen">
    <div className="w-3/5 h-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-4/5 h-1/2 justify-between">
        <div>
          <div className="flex justify-between">
            <h1 className="text-5xl text-way-dark-gray font-title">HeadWay</h1>
            <img src={logo} />
          </div>
          <div className="text-2xl text-way-dark-gray font-detail pt-2">Make systems. Meet goals.</div>
        </div>
        <form className="flex flex-col justify-between h-3/5 pt-6">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-96 border-b-2 border-black focus:outline-none"/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-96 border-b-2 border-black focus:outline-none"/>
          <button onClick={login} className="h-14 w-96 bg-way-light-gray text-bg-way-dark-gray focus:outline-none">Log In</button>
        </form>
        <a className="text-way-dark-gray" href="register">Need a HeadWay account? <span className="text-way-light-blue">Register here.</span></a>
      </div>
    </div>
    <div className="hidden md:block login-graphics bg-way-dark-gray w-2/5 h-full">

    </div>
  </main>);
}