import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

import useLocalStorage from '../../hooks/helpers/useLocalStorage';
import useUser from '../../hooks/useUser';

import SectionTitle from '../../components/SectionTitle';

import { LOCAL_STORAGE_KEY } from '../../constants';

const defaultGoalColor = '#5EB1BF';
const defaultGoalTextColor = "#FFFFFF";


export default function Home() {
  const { user, setUser } = useUser();
  const [ storedToken, setStoredToken, hasCheckedLocalStorage ] = useLocalStorage(LOCAL_STORAGE_KEY);

  useEffect(() => {
    if ((!storedToken || storedToken === 'undefined') && hasCheckedLocalStorage) {
      window.location = '/login';
    }

    if (storedToken && storedToken !== 'undefined') {
      axios({
        url: 'https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/auth/me',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${ storedToken }`
        }
      }).then( ({data}) => {
        console.log('data after auth')
        setUser(u => ({...u, ...data}));
      }).catch( ({ error }) => {
        console.log('invalid token');
        window.location ='/login';
      });
    }
  }, [storedToken]);

  useEffect(() => {
    if (user.id) {
      axios({
        url: `https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/user/${user.id}/goals/`,
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${ storedToken }`
        }
      }).then( ({data}) => {
        setUser(u => ({...u, goals: data.goals}));
      });
    }
  }, [user.id]);

  function createNewGoal() {
    if (storedToken && user.id) {
      axios({
        method: 'post',
        data: {
          user_id: user.id
        },
        url: 'https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/goals',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${ storedToken }`
        },
      }).then( ({data}) => {
        console.log('data', data.goal.id)
        window.location = `/goals/${data.goal.id}`
      });
    }
  }

  return (<div className="w-full flex flex-col items-center">
    <h1 className="text-xl font-medium mb-12 self-start">Home</h1>

    <div className="w-3/5 flex flex-col space-y-10">
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
    </div>
  </div>);
}