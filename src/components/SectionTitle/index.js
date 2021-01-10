import React from 'react';

export default function SectionTitle({ classes, title, subtitle, action, onActionClick}) {
  return (<div className={classes}>
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-base font-medium inline ml-5">{ title }</h1>
        {subtitle && <h2 className="text-sm font-light inline ml-2">{ subtitle }</h2>}
      </div>
      {action && <h2 onClick={onActionClick} className="text-sm font-normal inline ml-2 cursor-pointer">{ action }</h2>}
    </div>
    
    <div className="bg-way-light-gray h-0.5 mt-2"></div>
  </div>);
}