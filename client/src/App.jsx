import { useState } from "react"

export default function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(input.trim() === '') return alert('Add todo')
    setTodos(prev => [...prev, {id: Date.now(), text: input, completed: false}])
    setInput('')
  }

  function toggle(id){
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  function toggleSelectAll(e){
    if(e.target.checked){
      setTodos(prev => prev.map(todo => ({...todo, completed: true})))
    }else{
      setTodos(prev => prev.map(todo => ({...todo, completed: false})))
    }
  }

  function deleteTodo(id){
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  function handleEnter(e){
    if(e.key == "Enter"){
      handleSubmit(e)
    }
  }

  function handleSort(){
    setTodos(prev => [...prev].sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase())))
  }

  function handleSearch(term){
    setSearchTerm(term.toLowerCase())
  }

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm))


  return (
    <div>
      <h2>Todo</h2>
      <input onKeyDown={(e)=>handleEnter(e)} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Buy milk" />
      <button onClick={handleSubmit}>Add Todo</button>

      <hr/>
      <input type="checkbox" onChange={(e)=>toggleSelectAll(e)}/>
      <label> Select All </label>
      <button onClick={handleSort}>Sort</button>
      <input onInput={(e)=>handleSearch(e.target.value)} type="search" placeholder="todo" />
      <hr/>
      <div>
        {
          filteredTodos.length > 0 && filteredTodos.map(todo => {
            return (
              <div key={todo.id}> 
                <input onChange={()=>toggle(todo.id)} type="checkbox" checked={todo.completed} />
                <label style={{color: todo.completed ? 'red':'inherit'}}> {todo.text} </label>
                <button onClick={()=>deleteTodo(todo.id)}>❌</button>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}