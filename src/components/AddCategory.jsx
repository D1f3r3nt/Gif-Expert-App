import { useState } from 'react'
import PropTypes from "prop-types";

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
        <form onSubmit={ handleSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gift"
                value={ inputValue }
                onChange={ handleChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired
}