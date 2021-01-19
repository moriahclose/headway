import React from 'react';

import TopNav from "../TopNav";

export default function Layout({ children }) {

  return (<>
    <div className="flex flex-col w-full h-screen overflow-hidden p-10 bg-way-light-gray">
      <TopNav />
      <div className="w-full h-full">
        { children }
      </div>
    </div>
 </>);
}