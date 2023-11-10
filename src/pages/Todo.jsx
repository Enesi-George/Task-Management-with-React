import { useState, useEffect } from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import '../index.css';

const Todo = () => {
    const [isCompletedScreen, setIsCompletedScreen] = useState(false)
    const [allTodo, setTodo] = useState([])
    const [titleInput, setTitleInput]= useState('')
    const [descriptionInput, setdescriptionInput]= useState('')
    const [completedTodo, setCompletedTodo] = useState([])
    
  
    const handleTitleInput=(e)=>{
      setTitleInput(e.target.value)
    }
    const handleDescriptionInput = (e)=>{
      setdescriptionInput(e.target.value)
    }
  
    const handleAddTodo = ()=>{
      let newTodoItem ={
        title : titleInput,
        description : descriptionInput
      }
  
      let updateTodoArray =  [...allTodo];
      //add to todolist 
      updateTodoArray.push(newTodoItem);
      setTodo(updateTodoArray);
  
      //if data is an object of array of object, 
      //we convert to strings using JSON.strigify
      localStorage.setItem('All-Todo-List', JSON.stringify(updateTodoArray)) 
    }
  
    const handleDeleteTodo = (index)=>{
      // use spread operator to keep track of 
      //previous data
      let reducedTodo = [...allTodo];
  
      //then splice to remove the active index
      reducedTodo.splice(index, 1);
  
      //now update the local storage
      localStorage.setItem('All-Todo-List', JSON.stringify(reducedTodo));
      setTodo(reducedTodo);
    }
  
    const handleCompletedTask = (index)=>{
      let completionDate = new Date();
      let day = completionDate.getDate();
      let month = completionDate.getMonth() + 1;
      let year = completionDate.getFullYear();
      let hour = completionDate.getHours();
      let mins = completionDate.getMinutes();
      let seconds = completionDate.getSeconds();
      let completedOn = day + "-" + month + "-" + year + " @ " + hour + ":" + mins + ":" + seconds
  
      let filteredItem ={
        ...allTodo[index],
        completedOn: completedOn
      }
  
      let updatedCompletedArr = [...completedTodo];
      updatedCompletedArr.push(filteredItem);
      setCompletedTodo(updatedCompletedArr);
      handleDeleteTodo(index)
      localStorage.setItem('All-Completed-Todo', JSON.stringify(updatedCompletedArr));
      // setTodo(reducedTodo);
    }
  
   const handleDeleteCompletedTodo =(index)=>{
        // use spread operator to keep track of 
      //previous data
      let reducedTodo = [...completedTodo];
  
      //then splice to remove the active index
      reducedTodo.splice(index, 1);
  
      //now update the local storage
      localStorage.setItem('All-Completed-Todo', JSON.stringify(reducedTodo));
      setCompletedTodo(reducedTodo);
  
   }
  
  
  // to fetch data from localstorage and populate it to the UI, 
  //we use JSON.parse, which convert back to its previous divat.
    useEffect(()=>{
      let savedTodo = JSON.parse(localStorage.getItem('All-Todo-List'));
      let saveCompletedTodo = JSON.parse(localStorage.getItem('All-Completed-Todo'));
  
      if (savedTodo){
        setTodo(savedTodo);
      }
      
      if(saveCompletedTodo){
        setCompletedTodo(saveCompletedTodo)
      }
  
    },[])
    return (
      <div className='container'>
        <h1 className="text-center font-bold text-[white] text-4xl	my-5" >My Todos</h1>
        <div className='todo-wrapper '>
          <div className='todo-input'>
            <form className='sub-head flex responsive-sm responsive-md'>
            <div className='todo-input-item'>
              <label>Title: </label>
              <input 
              type="text"  
              value= {titleInput} 
              onChange={handleTitleInput} 
              placeholder=" what's your task title?"
              required/>
            </div>
  
            <div className='todo-input-item'>
              <label>Description:</label>
              <input 
              type="text" 
              value={descriptionInput} 
              onChange= {handleDescriptionInput} 
              placeholder=" what's your task description?"
              required/>
            </div>
  
            <div className='todo-input-item'>
              <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add Task</button>
            </div>
            </form>
  
  
            <div className='btn-area'>
              <button className={`secondaryBtn ${isCompletedScreen===false && 'active'}`} onClick={()=>setIsCompletedScreen(false)} >Todo</button>  
              <button className={`secondaryBtn ${isCompletedScreen===true && 'active'}`} onClick={()=>setIsCompletedScreen(true)}>Completed</button>  
            </div>
  
            <div className='todo-list'>
              { isCompletedScreen === false && allTodo.map((item,index)=>{
                return (
                  <div className='todo-list-item' key={index}>
                  <div>
                  <h3>{item.title}</h3>
                  <p> {item.description}</p>
                  </div>
                  <div className='flex flex-row'>
                    <AiOutlineDelete title='Delete' onClick={()=>handleDeleteTodo(index)} className='icon'/>
                    <BsCheckLg title='Completed' onClick={()=>handleCompletedTask(index)} className='check-icon'/>
    
                    <div>
                      
                    </div>
    
                  </div>
    
                </div>  
                )
              
              })}
  
              {/* mapping through the task complete objects */}
              { isCompletedScreen === true && completedTodo.map((item,index)=>{
                return (
                  <div className='todo-list-item' key={index}>
                  <div>
                  <h3>{item.title}</h3>
                  <p> {item.description}</p>
                  <p> <small><i>Completed on: {item.completedOn}</i></small></p>
                  </div>
                  <div>
                    <AiOutlineDelete title='Delete' onClick={()=>handleDeleteCompletedTodo(index)} className='icon'/>
                    <div>
                      
                    </div>
    
                  </div>
    
                </div>  
                )
              
              })}
  
            </div>
          </div>
        </div>
  
      </div>
    )
}

export default Todo
