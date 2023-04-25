import './Tours.css'
import TourDetails from '../TourDetails/TourDetails';
import Tour from "./tour/Tour.js";
import React from "react";

function Tours(props) {
    return (
        <>
            <h2>Tours list</h2>
            {
                props.arrayData.map((item, i) => {
                    return (
                        <Tour tour={item} />
                    )
                })
            }


        </>
    )
}
export default Tours;