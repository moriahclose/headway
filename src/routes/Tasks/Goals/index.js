import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../../components/Card";

export default function Goals({ onAddTask }) {
  const [ goals, setGoals ] = useState([]);

  // useEffect(() => {
  //   axios({
  //     url: '',
  //     method: 'get'
  //   })
  // })

  function updateList(data) {
    console.log('update', data)
  }

  return (
    <Card addListLabel="Goal" onUpdateList={updateList} onAddListItem={onAddTask} />
  )
}