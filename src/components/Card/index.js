import { useEffect, useRef, useState } from "react";

import PlusIcon from "../PlusIcon";

function ListItem({ id, title, color }) {
  return (<div className="font-primary text-xs" style={ color ? {backgroundColor: color} : {}}>
    { title }
  </div>);
}

export default function Card({ addListLabel, list, items, onUpdateList, onAddListItem }) {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const [ currentList, setCurrentList ] = useState(list || {});
  const [ currentItems, setCurrentItems ] = useState(items || []);
  const [ isEditingTitle, toggleIsEditingTitle ] = useState(false);
  const [ isEditingDescription, toggleIsEditingDescription ] = useState(false);

  useEffect(() => {
    isEditingTitle && titleRef.current.focus();
  }, [isEditingTitle]);

  function handleTitleChange() {
    onUpdateList({ title: titleRef.current.value});
    titleRef.current.blur();
    toggleIsEditingTitle(false);
  }

  function handleDescriptionChange() {
    onUpdateList({ description: descriptionRef.current.value});
    descriptionRef.current.blur();
    toggleIsEditingDescription(false);
  }

  return (<div className="bg-white shadow-xl w-72 min-h-24 rounded-lg p-4 cursor-pointer">
    { !currentList.title && !isEditingTitle && <div onClick={() => toggleIsEditingTitle(true)} className="font-primary w-full flex items-center">
      Add a {addListLabel}
    </div>}

    { isEditingTitle && <>
      <input ref={titleRef} value={currentList.title || ''} placeholder="Title" onChange={(e) => setCurrentList((l) => ({...l, title: e.target.value}))} onKeyPress={(e) => e.code === 'Enter' && handleTitleChange()} className="mb-4 w-full focus:outline-none text-lg font-primary" ></input>
      <div className="flex justify-between font-secondary text-way-dark-gray">
        <button onClick={handleTitleChange}>Save</button>
        <button onClick={() => toggleIsEditingTitle(false)}>Cancel</button>
      </div>
    </>}

    { currentList.title && !isEditingTitle && <div className="w-full mb-4">
      <div className="font-primary text-lg mb-2">{ currentList.title }</div>

      <div className="font-secondary font-thin mb-2 w-full text-xs">
        { !isEditingDescription && <div onClick={() => toggleIsEditingDescription(true)} className="cursor-pointer">{ currentList.description || <span className="font-way-dark-gray">Add a description...</span>}</div>}
        { isEditingDescription && <span role="textbox" contentEditable={true} ref={descriptionRef} className="w-full focus:outline-none resize-none" value={currentList.description} onChange={(e) => setCurrentList((l) => ({...l, description: e.target.value}))} onKeyPress={(e) => e.code === 'Enter' && handleDescriptionChange()}></span> }
      </div>
    </div>}

    { currentItems.length > 0 && currentItems.map(item => <ListItem key={item.id} {...item} />)}

    { currentList.title && !isEditingTitle && <button onClick={onAddListItem} className="flex justify-center text-way-dark-gray"><PlusIcon />&nbsp;&nbsp;Add a Task</button>}
  </div>)
}