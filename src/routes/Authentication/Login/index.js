import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import useUser from '../../../hooks/useUser';
import useLocalStorage from "../../../hooks/helpers/useLocalStorage";

import { LOCAL_STORAGE_KEY } from "../../../constants";

export default function Login() {
  const { setUser } = useUser();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');
  const [ shouldShowPassword, setShouldShowPassword ] = useState(false);

  const [ _, setStoredToken ] = useLocalStorage(LOCAL_STORAGE_KEY);

  let history = useHistory();

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
      history.push('/home');
    }).catch((error) => {
      console.log(error);
      setPasswordError('The email or password is incorrect.');
    });
  }

  const inputContainerClasses = "w-full flex flex-col mb-4 ";
  const inputClasses = "h-9 border border-way-input-gray rounded-md pl-2 focus:outline-none";

  return (<div className="h-full w-full flex items-center justify-center bg-way-light-gray">
    <div className="w-full h-full sm:w-login sm:h-login bg-white rounded-xl shadow-lg">
      <div className="h-full flex flex-col p-20 items-center">
        <div className="font-primary font-bold text-2xl items-center text-way-light-blue">HeadWay</div>
        <form className="w-full h-full flex flex-col justify-between mt-10 font-secondary text-way-dark-gray">
          <div className="w-full flex flex-col justify-between">
            <div className={inputContainerClasses}>
              <label htmlFor="email" className="text-sm">Email</label>
              <input className={inputClasses} type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="password" className="text-sm">Password</label>
              <input className={inputClasses} type={shouldShowPassword ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {passwordError && <div className="text-way-red text-sm">{ passwordError }</div>}
            <div className="text-way-light-blue cursor-pointer" onClick={() => setShouldShowPassword(!shouldShowPassword)}>{ shouldShowPassword ? 'Hide Password' : 'Show Password'}</div>
          </div>
          <button onClick={login} type="submit" className="w-full h-9 bg-way-orange text-white text-sm rounded-md">Log In</button>
        </form>
        <button onClick={() => history.push('/users/signup')} className="pt-2 font-secondary text-xs text-way-dark-gray">Don't have an account? <span className="text-way-light-blue">Sign up.</span></button>
      </div>
    </div>
  </div>);
}