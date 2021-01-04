import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import useLocalStorage from '../../hooks/helpers/useLocalStorage';
import useUser from "../../hooks/useUser";

import SectionTitle from "../../components/SectionTitle";

import { LOCAL_STORAGE_KEY } from '../../constants';

export default function Goals() {
  const { user, setUser } = useUser();
  const { goalId } = useParams();
  const [ goal, setGoal ] = useState();
  const { storedToken } = useLocalStorage(LOCAL_STORAGE_KEY);
  const [ selectedTab, setSelectedTab ] = useState('tasks');

  useEffect(() => {
    let goalInUserObject = user.goals && user.goals.find(g => g.id === goalId );

    if (goalInUserObject) {
      setGoal(goalInUserObject);
    } else {
      axios({
        url: `https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/goals/${goalId}`,
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${ storedToken }`
        },
      }).then( ({data}) => {
        console.log('data')
        setGoal(data);
        setUser(u => ({...u, goals: [...u.goals, data]}));
      });
    }

  }, [goalId]);

  if (!goal) {
    return null;
  }

  return (<div className="w-full flex flex-col items-center">
    <div className="flex flex-col w-full items-start justify-between">
      <h1 className="text-xl font-medium mb-2 self-start">{ goal.title || 'My New Goal'}</h1>

      <div className="flex mt-2 space-x-10 font-medium text-sm">
       <a className={`cursor-pointer ${selectedTab === 'tasks' && 'text-way-light-blue'}`}>Tasks</a>
       <a className={`cursor-pointer ${selectedTab === 'progress' && 'text-way-light-blue'}`}>Progress</a>
       <a className={`cursor-pointer ${selectedTab === 'calendar' && 'text-way-light-blue'}`}>Calendar</a>
      </div>
    </div>

    <div className="mt-6 w-4/5">
     <h6 className="text-sm text-dark-gray font-light pt-6 mb-2">Description</h6>
     <textarea value={goal.description || ''} onChange className="w-full focus:outline-none" placeholder="I want to... This is important to me because... These people will be involved... This will happen at... I will be need these resources...">
      </textarea>
    </div>
  </div>);
}