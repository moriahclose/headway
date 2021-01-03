import React from 'react';

export default function SectionTitle({ classes, title, subtitle}) {
  return (<div className={classes}>
    <h1 className="text-base font-medium inline ml-5">{ title }</h1>
    {subtitle && <h2 className="text-sm font-light inline ml-2">{ subtitle }</h2>}
    <div className="bg-way-light-gray h-0.5 mt-2"></div>
  </div>);
}