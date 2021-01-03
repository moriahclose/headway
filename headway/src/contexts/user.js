import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from "../hooks/helpers/useLocalStorage";

const LOCAL_STORAGE_KEY = 'headway_uid';

const INITIAL_STATE = {
  id: null,
  created_at: null,
  name: '',
  email: '',
  goals: [],
  token: '',
}

const UserContext = createContext([{}, () => {}]);

function UserProvider(props) {
  const [ state, setState ] = useState(INITIAL_STATE);
  const [ storedToken, setStoredToken, hasCheckedLocalStorage ] = useLocalStorage(LOCAL_STORAGE_KEY);

  function logoutCurrentUser() {
    console.log('are we doing this maybe?')
    setState(INITIAL_STATE);
    setStoredToken('');
    window.location = window.location.origin + '/login';
  }

  useEffect(() => {
    console.log('user in hook', state)
  }, [state])

  return (
		<UserContext.Provider value={[state, setState, logoutCurrentUser]}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider, INITIAL_STATE }
