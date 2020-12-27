import React from 'react';

import logo from "../../assets/Temp Logo Large.png";

export default function Register() {
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
          <input type="text" placeholder="Email" className="w-96 border-b-2 border-black focus:outline-none"/>
          <input type="password" placeholder="Password" className="w-96 border-b-2 border-black focus:outline-none"/>
          <input type="password" placeholder="Confirm Password" className="w-96 border-b-2 border-black focus:outline-none"/>
          <button type="submit" className="h-14 w-96 bg-way-light-gray text-bg-way-dark-gray focus:outline-none">Register</button>
        </form>
        <a className="text-way-dark-gray" href="login">Already have a HeadWay account? <span className="text-way-light-blue">Log in here.</span></a>
      </div>
    </div>
    <div className="login-graphics bg-way-dark-gray w-2/5 h-full">

    </div>
  </main>);
}