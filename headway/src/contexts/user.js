import React, { useState, useEffect, createContext } from 'react';
import useLocalStorage from "../hooks/helpers/useLocalStorage";

const LOCAL_STORAGE_KEY = 'headway_uid';

const INITIAL_STATE = {
  id: null,
  created_at: null,
  name: '',
  email: '',
  goals: [],
}

const UserContext = createContext([{}, () => {}]);

function UserProvider(props) {
  const [ state, setState ] = useState(INITIAL_STATE);
  const [ storedUserID, setStoredUserID, hasCheckedStorage ] = useLocalStorage(LOCAL_STORAGE_KEY);

  function logoutCurrentUser() {
    setState(INITIAL_STATE);
    window.location = window.location.origin;
  }

  useEffect(() => {
    if (!state.id) {
      window.location = `${window.location.origin}/login`;
    }
    
  }, [state.id])

  return (
		<UserContext.Provider value={[state, logoutCurrentUser]}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider, INITIAL_STATE }
