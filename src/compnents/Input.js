import React from 'react';

const Input = (props) => {
    const {list,setList} = props;

    let task = {
        name: "",
        isComplete: false,
    };

    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = e => {
        setList ([...list, task]);
        e.target.value="";
    };

    return(
        <div className ="container mt-3">
            <input className="form-control mt-3" onChange={onChange} type="text" name="task"/>
            <button className="btn btn-primary btn-block mt-3 mb-3" onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input;