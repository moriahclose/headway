import React from 'react';

import Logo from '../../assets/Temp Logo.png';

export default function SideNav() {

  return <div className="bg-way-dark-gray text-white absolute inset-y-0 w-side-nav flex flex-col">
    <div className="NavHeader flex justify-between items-center p-4">
      <div className="text-xl">HeadWay</div>
      <img src={ Logo } className="max-h-full w-auto" />
    </div>

    <div className="pt-8 pl-10 flex flex-col justify-between items-left text-left w-full h-1/4">
      <a>Goals</a>
      <a>Tasks</a>
      <a>Calendar</a>
    </div>
  </div>
}