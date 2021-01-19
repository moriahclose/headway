import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../../components/Card";
import useUser from "../../../hooks/useUser";

export default function Goals({ onAddTask }) {
  const [ user ] = useUser();
  const [ goals, setGoals ] = useState([]);

  useEffect(() => {
    if (user.id) {
      axios({
        url: `https://x8ki-letl-twmt.n7.xano.io/api:R7Ak7I0A/user/${user.id}/goals/`,
        method: 'get'
      }).then(({ data }) => {
        setGoals(data.goals);
      });
    }
  }, [user]);

  function updateList(data) {
    console.log('update', data)
  }

  return (
    <Card addListLabel="Goal" onUpdateList={updateList} onAddListItem={onAddTask} />
  )
}