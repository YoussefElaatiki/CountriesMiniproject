import React from 'react'
import {useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Continents() {
  const continent = useSelector((data)=> data.continent);

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

      <div>
        <h2>Continents:</h2>
        {continent.map((c, i)=>{
          return(
            <div key={i} >
              <img src={c.imag} alt={c.nom}/>
              <div>
                <h3>{c.nom}</h3>
                <p><b>La superficie:</b> {c.surface}</p>
                <p><b>La population:</b> {c.population}</p>
              </div>
            </div>
          )
        })}
      </div>
      <br/><br/><br/>  
    </div>
  )
}

export default Continents