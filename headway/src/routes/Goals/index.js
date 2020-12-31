import React, { useEffect } from 'react';

import useUser from "../../hooks/useUser";

export default function Goals() {
  const { user, setUser } = useUser();

  console.log('what about this')

  useEffect(() => {
    console.log('user', user)
  }, [])

  return <div className="text-2xl font-bold">User</div>
}