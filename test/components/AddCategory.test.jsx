import {AddCategory} from "../../src/components/index.js";
import {fireEvent, render, screen} from "@testing-library/react";

describe('Pruebas en <AddCategory />', () => {
    const value = 'Hola'

    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewValue={ () => {}} /> )

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: value }} )

        expect( input.value ).toBe( value )
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const onNewValue = jest.fn()

        render( <AddCategory onNewValue={ onNewValue } /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: value }} )
        fireEvent.submit( form )

        expect( input.value.length ).toBe( 0 )

        expect( onNewValue ).toHaveBeenCalled()
        expect( onNewValue ).toHaveBeenCalledWith( value )
    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewValue = jest.fn()

        render( <AddCategory onNewValue={ onNewValue } /> )

        const form = screen.getByRole('form');

        fireEvent.submit( form )

        expect( onNewValue ).not.toHaveBeenCalled()
    })
})
