import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header"

export default function Beers() {
    const [beers, setBeers] = useState([]);
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers"
    
    useEffect(() => {
        axios.get(apiURL).then((response) => {
            console.log("response.data", response.data);
            setBeers(response.data);
        })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div>
          <div>
            {beers.map(beer => (
              <div key="beer._id">
                <Link
                  to={`/beers/${beer._id}`}>
                  <div>
                    <img src={beer.image_url} alt={beer.name} />
                  </div>
                  <div>
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }