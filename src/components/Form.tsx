import React from 'react'

interface FormProps {
    onAdd(title: string): void
}

export const Form: React.FC<FormProps> = ({onAdd}) => { 
    const [title, setTitle] = React.useState<string>('')

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const pressEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }

    return(
        <div className='input-field mt-2'>
            <input 
                type="text" 
                id='title'
                onChange={changeTitle}
                value={title}
                onKeyPress={pressEnter}
            />
            <label htmlFor="title" className='active'>Введите название задачи</label>
        </div>
    )
}