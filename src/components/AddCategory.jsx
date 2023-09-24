import { useState } from 'react'

export const AddCategory = ({ onNewValue }) => {

    const [ inputValue, setInputValue ] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if ( inputValue.trim().length <= 1 ) return;

        onNewValue( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Buscar gift"
                value={ inputValue }
                onChange={ handleChange }
            />
        </form>
    )
}