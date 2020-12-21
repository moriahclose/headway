import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

import SideNav from '../SideNav';

export default function Layout({ children }) {
  const [ goals, setGoals ] = useState([]);

  useEffect(() => {
    axios.get('https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/user/3/goals/')
    .then(({ data }) => {
      setGoals(data);
    })
  }, [])

  return (<div className="flex w-full">
    <SideNav goals={goals} />
    <div className="ml-side-nav p-6 w-full h-full">
      { children }
    </div>
  </div>);
}