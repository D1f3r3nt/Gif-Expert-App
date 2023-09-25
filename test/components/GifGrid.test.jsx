import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";

jest.mock("../../src/hooks/useFetchGifs.js")

describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'Dragon Ball'

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getByText( 'Cargando...' ) )
        expect( screen.getByText( category ) )
    })

    test('Debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getAllByRole('img').length ).toBe( 2 )
    })
})