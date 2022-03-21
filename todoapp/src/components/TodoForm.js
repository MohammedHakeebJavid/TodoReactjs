import React,{useState} from 'react'
import ReactDOM from 'react-dom'

function TodoForm(props) {
const [input, setInput]=useState('')

const handlesubmit =e=>{
    e.preventDefault();

    this.props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
    });
    setInput=('');
};

const handlechange = e=>
{
    setInput()(e.target.value);
}

  return (
      <>
    <form  className="todo-form" on onSubmit={handlesubmit}>
        <input type="text"
         placeholder="Add a todo" 
         value={input} name="text"
         className='todo-input'
         onChange={handlechange}
         />
         <button className='todo-button'>Add
         </button>
    </form>
    </>
  )
}

export default TodoForm;