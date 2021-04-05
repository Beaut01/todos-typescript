import React from 'react'
import { Form } from '../components/Form'
import { List } from '../components/List'
import { Todo } from '../interfaces';

export const Main = () => {
    const [todos, setTodos] = React.useState<Todo[]>([])

    const addTodo = (title: string) => {
      const obj: Todo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodos(prev => [obj, ...prev])
    }
  
    // const changeCompleted = (id: number) => {
    //   setTodos(prev => prev.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed
    //     }
    //     return todo
    //   }))
    // }
  
    const changeCompleted = (id: number) => {
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }))
    }
  
    const deleteTodo = (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  
    React.useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]
  
      setTodos(saved)
    },[])
  
    React.useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])
  
  
    return(
        <div className='container'>
          <Form onAdd={addTodo}/>
          <List todos={todos} onDelete={deleteTodo} onToggle={changeCompleted}/>
        </div>
    )
}