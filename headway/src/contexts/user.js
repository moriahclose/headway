import React, { createContext } from 'react';

const INITIAL_STATE = {
  id: null,
  created_at: null,
  name: '',
  email: '',
  goals: []
}

const UserContext = createContext([{}, () => {}]);
