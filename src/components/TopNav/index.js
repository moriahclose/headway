import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeClasses = "border-b-4 border-way-light-blue";

export default function TopNav() {
  return (<div className="w-full font-primary flex flex-col sm:flex-row justify-between">
    <Link to="/home" className="font-bold text-way-light-blue text-2xl">HeadWay</Link>
    <nav className="flex justify-between w-full sm:w-1/2 lg:w-1/4 font-bold text-md">
      <NavLink to="/home" activeClassName={activeClasses} className="cursor-pointer">Home</NavLink>
      <NavLink to="/tasks/goals" isActive={(_, location) => location.pathname.includes('tasks/goals') || location.pathname.includes('tasks/routines')} activeClassName={activeClasses} className="cursor-pointer">Tasks</NavLink>
      <NavLink to="/progress" activeClassName={activeClasses} className="cursor-pointer">Progress</NavLink>
      <NavLink to="/calendar" activeClassName={activeClasses} className="cursor-pointer">Calendar</NavLink>
    </nav>
  </div>)
}