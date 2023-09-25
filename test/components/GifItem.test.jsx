import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components/index.js";

describe('Pruebas en <GifItem />', () => {

    const title = 'Titulo'
    const url = 'https://www.google.com/'

    test('Debe pasar el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> )

        // expect(screen.getByRole('img').src).toBe( url )
        // expect(screen.getByRole('img').alt).toBe( title )

        const { src, alt } = screen.getByRole('img')

        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    })

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url } /> )
    })
})