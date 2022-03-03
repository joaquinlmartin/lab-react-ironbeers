import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BeerDetails() {
    const params = useParams();
    const [beer, setBeer] = useState([]);
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers";
    
    useEffect(() => {
      axios.get(`apiURL${params.id}`).then((response) => {
          console.log("response.data", response.data);
          setBeer(response.data);
        })
        .catch((error)=>console.log(error))
    }, [params.id]);

    return (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <h3>{beer.first_brewed}</h3>
        <h3>{beer.attenuation_level}</h3>
        <h3>{beer.description}</h3>
        <h3>{beer.contributed_by}</h3>
      </div>
    );    
}