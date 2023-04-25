import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import './TourDetails.css'
import { useState } from 'react';
const data = require('./../../data/db.json');



const TourDetails = (props) => {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const result = data.filter(t => t.id === id);
  const text  = result[0].info;
  return (
    <>
      <Header />
      <div className='description'>
        <h2> {result[0].name}</h2>
        <img src={data.find(t => t.id === id).image} alt={data.find(t => t.id === id).id} />
        <p>City ID: {id}</p>
        <p> Price of tour: {result[0].price}$</p>
        <h6>
          {showMore ? text : `${text.substring(0, 250)}`}
          <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
        </h6>
      </div>
      <Footer />
    </>
  );
};
export default TourDetails;