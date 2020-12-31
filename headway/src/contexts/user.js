import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
// import useLocalStorage from "../hooks/helpers/useLocalStorage";

// const LOCAL_STORAGE_KEY = 'headway_uid';

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
  // const [ storedUserID, setStoredUserID, hasCheckedStorage ] = useLocalStorage(LOCAL_STORAGE_KEY);

  function logoutCurrentUser() {
    setState(INITIAL_STATE);
    window.location = window.location.origin + '/login';
  }

  useEffect(() => {
    console.log('user in hook', state)
  }, [state])

  useEffect(() => {
    if (state.token) {
      axios({
        url: 'https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/auth/me',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${ state.token }`
        }
      }).then( ({data}) => {
        setState(u => ({...u, ...data}));
        window.location = '/goals'
      });
    }
  }, [state.token]);

  return (
		<UserContext.Provider value={[state, setState, logoutCurrentUser]}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider, INITIAL_STATE }
