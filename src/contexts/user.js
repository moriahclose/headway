import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from "../hooks/helpers/useLocalStorage";

import { LOCAL_STORAGE_KEY } from "../constants";

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
    setState(INITIAL_STATE);
    setStoredToken('');
    window.location = window.location.origin + '/login';
  }

  useEffect(() => {
    if (storedToken && hasCheckedLocalStorage) {
      axios({
        url: 'https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/auth/me',
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${ storedToken }`
        }
      }).then(({ data }) => {
        setState(data);
      });
    }
  }, [storedToken, hasCheckedLocalStorage]);

  return (
		<UserContext.Provider value={[state, setState, logoutCurrentUser]}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider, INITIAL_STATE }
