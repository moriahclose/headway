import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Goals from "./Goals";
import Routines from "./Routines";

function TaskEditor({ id, title }) {
  return (<div className="absolute inset-y-0 bg-white w-1/2 right-0 shadow-xl top-32 p-10">
    <h1 className="font-primary text-4xl w-full text-center">Task editor</h1>
  </div>);
}

const activeClasses = "border-b-2 border-way-dark-gray";

export default function Tasks() {
  const location = useLocation();

  const [ currentTask, setCurrentTask ] = useState(null);
  const [ taskEditorIsOpen, setTaskEditorIsOpen ] = useState(false);

  const [ currentGoal, setCurrentGoal ] = useState(null);
  const [ goalEditorIsOpen, setGoalEditorIsOpen ] = useState(false);

  const [ currentRoutine, setCurrentRoutine ] = useState(null);
  const [ routineEditorIsOpen, setRoutineEditorIsOpen ] = useState(false);

  useEffect(() => {
    setTaskEditorIsOpen(currentTask !== null);
  }, [currentTask]);

  function createNewTask() {
    setCurrentTask({});
  }

  return (<>
    <nav className="flex mt-2">
      <NavLink to="/tasks/goals" activeClassName={activeClasses} className="font-secondary font-bold  text-way-dark-gray mr-2">Goals</NavLink>
      <NavLink to="/tasks/routines" activeClassName={activeClasses} className="font-secondary font-bold text-way-dark-gray ">Routines</NavLink>
    </nav>

    <div className="mt-10">
      {location.pathname.includes('goals') ? <Goals onAddTask={createNewTask} /> : <Routines onAddTask={createNewTask} />}
    </div>

    { taskEditorIsOpen && <TaskEditor />}
  </>);
}