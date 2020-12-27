import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav';

import {UserProvider} from "../../contexts/user";

export default function Layout({ children }) {
  return (<UserProvider>
    <div className="flex w-full">
      <SideNav />
      <div className="ml-side-nav p-6 w-full h-full">
        { children }
      </div>
    </div>
  </UserProvider>);
}