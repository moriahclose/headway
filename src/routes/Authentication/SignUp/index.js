import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import useUser from '../../../hooks/useUser';

export default function SignUp() {
  const { setUser } = useUser();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');
  const [ shouldShowPassword, setShouldShowPassword ] = useState(false);

  let history = useHistory();

  function signup(e) {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setPasswordError(`These passwords don't match. Try again.`);
      return;
    }

    if (password.length < 8 || !password.match(/[0-9]/g)) {
      setPasswordError("Password must be at least 8 characters and contain at least 1 number.");
      return;
    }

    axios({
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/auth/signup',
      method: 'post',
      data: {
        email,
        password
      }
    }).then(({ data }) => {
      console.log('data', data)
      setUser(data);
      history.push('/home');
    }).catch((error) => {
      console.log(error)
      if (error.response.status === 403) {
        setPasswordError("Uh oh! We can't create this account.");
      } else if (error.response.data.message.includes('email')) {
        setPasswordError("Make sure email is valid.");
      }
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
            <div className={inputContainerClasses}>
              <label htmlFor="passwordConfirmation" className="text-sm">Confirm Password</label>
              <input className={inputClasses} type={shouldShowPassword ? "text" : "password"} name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => { setPasswordError(''); setPasswordConfirmation(e.target.value)}}/>
            </div>
            <div className="text-way-light-blue cursor-pointer" onClick={() => setShouldShowPassword(!shouldShowPassword)}>{ shouldShowPassword ? 'Hide Password' : 'Show Password'}</div>
            {passwordError && <div className="text-way-red text-sm py-2">{ passwordError }</div>}
          </div>
          <button onClick={signup} type="submit" className="w-full h-9 bg-way-orange text-white text-sm rounded-md">Sign Up</button>
        </form>
        <button onClick={() => history.push('/users/login')} className="pt-2 font-secondary text-xs text-way-dark-gray">Already have an account? <span className="text-way-light-blue">Log in.</span></button>
      </div>
    </div>
  </div>);
}