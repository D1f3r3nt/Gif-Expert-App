import {useEffect, useState} from "react";
import {getGifs} from "../services/GetGifs.js";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async () => {
        const images = await getGifs( category )
        setImages( images )
        setIsLoading( false )
    }

    useEffect(() => {
        getImages()
    }, []);

    return {
        images,
        isLoading
    }
}