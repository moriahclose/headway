import React from 'react';

import SideNav from '../SideNav';

export default function Layout({ children }) {
  return (<div className="flex w-full">
    <SideNav />
    <div className="ml-side-nav p-6 w-full h-full">
      { children }
    </div>
  </div>);
}