import React from 'react';

const Task = (props) =>{
    const {task,index,list,setList} = props;

    const onClick = () =>{
        setList(()=> {
            return list.filter(task => list.indexOf(task)!= index);
        });
    };

    const onChange = () =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return(
        <div className="container p-2 mt-2" style={{backgroundColor: "#DEDEDE"}}>
            <div className="row justify-content align-items-center">
                <div class="col-7 ">
                    {list[index].isComplete ? <p style= {{textDecoration: "line-through"}}>{task.name}</p>:<p>{task.name}</p>}
                </div>
                <div class="col-3">
                    <label htmlFor="checkbox">Done</label>
                    <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
                </div>
                <div class="col-2 mb-2">
                    <button className="btn btn-sm btn-danger" onClick={onClick}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;