import React from 'react'
import { useSelector } from 'react-redux'

function IndepYears({pay}) {
    const pays = useSelector(state => state.continent.reduce((prev, curr) => prev.concat(curr.pays), []).filter(pays => pays.indepYear === pay));

  return (
    <div>
        {pays.map((p, i)=>(
            <div key={i}>
                <img src={p.image} alt={p.nom} />
                <div>
                    <h3>{p.nom}</h3>
                    <p><b>L'année de l'indépendance:</b> {p.indepYear}</p>
                    <p><b>Le capitale:</b> {p.capitale}</p>
                    <p><b>La population:</b> {p.population}</p>
              </div>
            </div>
        ))}
    </div>
  )
}

export default IndepYears