import { useEffect, useState } from 'react'
import './App.css'
import { TaskList } from './TaskList';
import { NewToDo } from './NewToDo';

function App() {
  
  const [inputValues, setInputValues] = useState('');
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue == null ? [] : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items])


  const handleAddItem = () => {
    inputValues.trim() !== '' ? setItems([...items, inputValues]) : setInputValues('')
  }

  const handleDeleteItem = (id) => {
    const updatedItems = [...items];
    updatedItems.splice(id, 1);
    setItems(updatedItems);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();   //Chống reset trang
    setInputValues('');   //tạo mới input
  }


  return (
    <>
      <NewToDo 
        inputValues={inputValues}
        setInputValues={setInputValues}
        handleFormSubmit={handleFormSubmit}
        handleAddItem={handleAddItem}
      />
      
      <div className='task-list-container'>
        <h2>TASKS</h2>
        <TaskList
          items={items}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </>
  )
}

export default App
