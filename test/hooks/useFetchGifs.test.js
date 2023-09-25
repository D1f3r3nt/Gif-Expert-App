import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";
import { renderHook, waitFor } from "@testing-library/react";

describe('Pruebas en el hook useFetchGifs', () => {

    const category = 'Dragon Ball'

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs(category) )
        const { images, isLoading } = result.current

        expect( images.length ).toBe( 0 )
        expect( isLoading ).toBe( true )
    })

    test('Debe de regresar un array de imagenes y isLoading a false', async () => {

        const { result } = renderHook( () => useFetchGifs(category) )
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
        )

        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan( 0 )
        expect( isLoading ).toBe( false )
    })

})