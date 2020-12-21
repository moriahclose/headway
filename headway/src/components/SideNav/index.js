import React from 'react';

import Logo from '../../assets/Temp Logo.png';

export default function SideNav({ goals }) {

  return <div className="bg-way-dark-gray text-white absolute inset-y-0 w-side-nav flex flex-col">
    <div className="NavHeader flex justify-between items-center p-4">
      <div className="text-xl">HeadWay</div>
      <img src={ Logo } alt="HeadWay logo" className="max-h-full w-auto" />
    </div>

    <div className="pt-8 pl-6 flex flex-col justify-between items-left text-left w-full h-1/3">
      <a href="/goals">Goals</a>
      { goals.length > 0 && <div className="pl-4 pb-4 text-sm flex flex-col">
        {goals.map((g) => <a key={g.id} href={`/goals/${g.id}`}>{ g.title }</a>)}
      </div>}
      <a href="/tasks">Tasks</a>
      <a href="/calendar">Calendar</a>
    </div>
  </div>
}