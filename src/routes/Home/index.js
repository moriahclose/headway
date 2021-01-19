import React from 'react';

import TopNav from '../../components/TopNav';

import useUser from '../../hooks/useUser';

export default function Home() {

  return (<div className="w-full flex flex-col items-center">
    {/* <div className="w-3/5 flex flex-col space-y-10">
      <section>
        <SectionTitle title={'Goals'} action="+ Add a Goal" onActionClick={createNewGoal} />

        <div className="flex flex-col sm:flex-row flex-wrap justify-between mt-6">
          { user.goals && user.goals.length > 0 && user.goals.map( (goal) => <div key={goal.id} className="mt-2 h-32 w-32 rounded-md text-center text-lg cursor-pointer" onClick={() => window.location = `/goals/${goal.id}`} style={{backgroundColor: goal.color || defaultGoalColor, color: goal.textColor || defaultGoalTextColor }}>
            <div className="mt-4 max-h-full truncate">{ goal.title || `Goal ${goal.id}`}</div>
          </div>)}
        </div>
      </section>

      <section>
        <SectionTitle title={'Today'} subtitle={format(new Date(), 'PPP')} action="+ Add a Task" />
      </section>
    </div> */}
  </div>);
}