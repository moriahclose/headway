import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

import useLocalStorage from '../../hooks/helpers/useLocalStorage';
import useUser from '../../hooks/useUser';

import SectionTitle from '../../components/SectionTitle';

const LOCAL_STORAGE_KEY = 'headway_uid';


export default function Home() {
  const { user, setUser } = useUser();
  const { goals, setGoals } = useState([]);
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
    axios({
      url: '',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${ storedToken }`
      }
    }).then( ({data}) => { 

    });

  }, [user]);

  function createNewGoal() {
    console.log('storedToken', storedToken, 'userID', user.id)
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

  return(<div className="w-full flex flex-col items-center">
    <h1 className="text-xl font-medium mb-12 self-start">Home</h1>

    <div className="w-3/5 flex flex-col space-y-10">
      <section>
        <SectionTitle title={'Goals'} />

        <div className="flex flex-col sm:flex-row mt-6">
          { user && user.goals && user.goals.length > 0 && user.goals.map( (goal) => <div key={goal.id} className="h-32 w-32 rounded-md text-center text-lg cursor-pointer" style={{backgroundColor: goal.color, color: goal.textColor}}>
            <div className="mt-4 max-h-full truncate">{ goal.title }</div>
          </div>)}
          <div onClick={createNewGoal} className="transition-height h-32 w-32 hover:h-36 duration-500 ease-in-out rounded-md text-center text-way-dark-gray text-lg border border-way-light-gray cursor-pointer bg-white">
            <div className="text-5xl text-left ml-2 text-way-light-gray opacity-50">+</div>
            <div className="mt-2 max-h-full overflow-y-truncate px-4">Create a Goal</div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title={'Today'} subtitle={format(new Date(), 'PPP')} />
      </section>
    </div>
  </div>);
}