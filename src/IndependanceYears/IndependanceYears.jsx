import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import IndepYears from './IndepYears';

function IndependanceYears() {

  const indepYears = useSelector(state => [...new Set(state.continent.reduce((prev, acc) => prev.concat(acc.pays), []).map(pays => pays.indepYear))]);

  const [year, setyear] = useState(null);


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
        <h4>Année de l'indépendance des pays:</h4>
        <div>
          {indepYears.map((pay, index)=>{
            return(<a href='' className='me-4' key={index} onClick={(e)=>{
              e.preventDefault()
              setyear(pay)
            }} ><button>{pay}</button></a>)
          })}
        </div>
        <div>
          {year && (
            <IndepYears pay={year} />
          )}
        </div>
      </div>
    </div>
  )
}

export default IndependanceYears