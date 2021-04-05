import React from 'react'
import { Todo } from '../interfaces'

type ListProps = {
    todos: Todo[]
    onToggle(id: number): void
    onDelete(id: number): void
}

export const List: React.FC<ListProps> = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return(
            <p className='center'>Вы ещё не ввели задач!</p>
        )
    }

    return(
        <ul>
           { todos.map(todo => {
               const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

               return(
                   <li className={classes.join(' ')} key={todo.id}>
                       <label>
                           <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                           <span>{todo.title}</span>
                           <i className='material-icons red-text' onClick={() => onDelete(todo.id)}>
                               delete
                            </i>
                       </label>
                   </li>
               )
           }) }
        </ul>
    )
}