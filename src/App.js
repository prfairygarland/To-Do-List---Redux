import { useRef } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const txtRef = useRef("");
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("state :: ", state)

  const addHandler = () => {
    if(txtRef.current.value) {
      dispatch({type: "ADD", payload: txtRef.current.value})
      txtRef.current.value = "";
    } else {
      alert("Task field cannot be empty!")
    }    
  }

  const handleDelete = (task) => {
    dispatch({type: "REMOVE", payload: task})
  }
  return (
    <div className="app">
      <div className='container' >
          <div>
            <input type='text' className='input-task' ref={txtRef} placeholder='Enter Task' />
            <button className='add-btn' onClick={addHandler}>Add</button>
          </div>
          {
            state?.toDo && state.toDo?.tasks.map((task, index) => {
              return(
                <div key={index} className='task-list' title='Click to delete' onClick={() => handleDelete(task)}>{task}</div>
              )
            })
          }
          </div>
    </div>
  );
}

export default App;
