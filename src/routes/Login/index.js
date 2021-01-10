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

  return (<div className="absolute inset-0 flex items-center justify-center bg-way-light-gray">
    <div className="w-full h-full sm:w-login sm:h-login bg-white rounded-xl">
      <div className="flex flex-col p-10 items-center">
        <div className="font-primary text-2xl items-center text-way-light-blue">HeadWay</div>
      </div>
    </div>
  </div>);
}