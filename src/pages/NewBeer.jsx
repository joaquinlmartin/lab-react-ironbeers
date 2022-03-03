import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBeer () {
    const [form, setForm] = useState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
    const navigate = useNavigate(); 
    const handleForm = e => {
        setForm(previous => {
            return {
              ...previous,
              [e.target.name]: e.target.value,
            };
        })
    }
   const handleSubmit = e => {
        e.preventDefault();
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, form).then(() => {
                navigate('/beers')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
      <div className="new-beer-container">
        <div className="new-beer-card">
          <h1>Add New Beer</h1>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
            />
            <label>Tagline</label>
            <input
              type="text"
              name="tagline"
              value={form.tagline}
              onChange={handleForm}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleForm}
            />
            <label>First Brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={form.first_brewed}
              onChange={handleForm}
            />
            <label>Brewer's Tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={form.brewers_tips}
              onChange={handleForm}
            />
            <label>Attenuation Level</label>
            <input
              type="number"
              name="attenuation_level"
              value={form.attenuation_level}
              onChange={handleForm}
            />
            <label>Contributed By</label>
            <input
              type="text"
              name="contributed_by"
              value={form.contributed_by}
              onChange={handleForm}
            />
            <button type="submit">Add New</button>
          </form>
        </div>
      </div>
    );    

}