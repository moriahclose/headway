import React from 'react';

import Logo from '../../assets/Temp Logo.png';

import useUser from "../../hooks/useUser";

export default function SideNav() {
  const { logoutUser } = useUser();

  return <div className="bg-way-dark-gray text-white absolute inset-y-0 w-side-nav flex flex-col">
    <div className="NavHeader flex justify-between items-center p-4">
      <div className="text-xl">HeadWay</div>
      <img src={ Logo } alt="HeadWay logo" className="max-h-full w-auto" />
    </div>

    <div className="pt-8 pl-6 flex flex-col justify-between items-left text-left w-full h-1/3">
      <div className="flex flex-col justify-between">
        <a href="/goals">Goals</a>
        <a href="/tasks">Tasks</a>
        <a href="/calendar">Calendar</a>
      </div>
      <div className="cursor-pointer" onClick={() => logoutUser() } >Logout</div>
    </div>
  </div>
}