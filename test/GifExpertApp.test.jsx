import {render} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp.jsx";

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe hacer match con el es snapshot', () => {
        const { container } = render( <GifExpertApp /> )
        expect( container ).toMatchSnapshot()
    })
})