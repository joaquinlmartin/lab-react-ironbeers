import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RandomBeer () {
    const [beer, setBeer] = useState([]);
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random";

        useEffect(() => {
          axios.get(apiURL).then((response) => {
              console.log("response.data", response.data);
              setBeer(response.data);
            })
            .catch((error) => console.log(error));
        }, []);

    return (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    );

}