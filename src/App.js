import Input from './compnents/Input';
import Task from './compnents/Task';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [list,setList] = useState([])

  return (
    <div className="App container" style={{width: "600px"}}>
      <Input list={list} setList={setList}/>
      {
        list.map((task, i) => (
          <Task task={task} setList={setList} index={i} list={list}/>
        ))
      }
    </div>
  );
}

export default App;
