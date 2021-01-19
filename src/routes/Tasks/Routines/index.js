import Card from "../../../components/Card";

export default function Routines({ onAddTask }) {

  function updateList(data) {
    console.log('update', data)
  }

  return (
    <Card addListLabel="Routine" onUpdateList={updateList} onAddListItem={onAddTask} />
  )
}