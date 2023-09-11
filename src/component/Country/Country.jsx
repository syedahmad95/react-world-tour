import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    
    const [visited, setVisited] =useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
    // console.log(handleVisitedCountries)
    return (
        <div className={`country ${visited && 'visited'}` }>
            <h3> {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3} </p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            <br />
            <button onClick={()=>handleVisitedFlags(flags.png)}>Add Flag</button>
            {
                visited ? 'I have visited this Country' : 'I want to visite'
            }
        </div>
    );
};

export default Country;