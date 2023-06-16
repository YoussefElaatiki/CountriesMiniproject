import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouter } from "../Store/actionsTypes";
import { Link } from "react-router-dom";

function AddCountry() {
  const continents = useSelector((state) => state.continent);
  const [selectedContinent, setselectedContinent] = useState({
    code: "",
    population: "",
  });
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    contentsCode: "",
    nom: "",
    capitale: "",
    population: "",
    indepYear: 0,
    img: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      contentsCode: formData.contentsCode,
      pays: {
        nom: formData.nom,
        capitale: formData.capitale,
        population: parseInt(formData.population),
        indepYear: parseInt(formData.indepYear),
        img: formData.img,
      },
    };
    dispatch(ajouter(data));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Countries
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item p-3">
                <Link
                  class="text-decoration-none text-dark"
                  to="/"
                  aria-current="page"
                >
                  Accueil
                </Link>
              </li>
              <li class="nav-item p-3">
                <Link
                  class="text-decoration-none text-dark"
                  to="/IndependanceYears"
                >
                  Année De L'indépendance
                </Link>
              </li>
              <li class="nav-item p-3">
                <Link class="text-decoration-none text-dark" to="/AddCountry">
                  Ajouter Pays
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h4>Ajouter Pays:</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={formData.contentsCode}
              className="form-control"
              name="contentsCode"
              placeholder="Entre le nom de Continent"
              aria-label="Entre le nom de Continent"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={formData.nom}
              className="form-control"
              name="nom"
              placeholder="Le Nom De Pay"
              aria-label="Le Nom De Pay"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={formData.capitale}
              className="form-control"
              name="capitale"
              placeholder="Capitale"
              aria-label="Capitale"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={formData.population}
              className="form-control"
              name="population"
              placeholder="Le Number De population"
              aria-label="Le Number De population"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="number"
              onChange={handleChange}
              value={formData.indepYear}
              className="form-control"
              name="indepYear"
              placeholder="Année L'indépendance"
              aria-label="Année L'indépendance"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={formData.img}
              className="form-control"
              name="img"
              placeholder="URL Photo"
              aria-label="URL Photo"
            />
          </div>
        </div>
        <button type="submit">AJOUTER</button>
      </form>
    </div>
  );
}

export default AddCountry;
