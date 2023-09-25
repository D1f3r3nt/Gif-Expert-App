import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && <h1>Cargando...</h1> }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
