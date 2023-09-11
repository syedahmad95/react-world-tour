import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country =>{
        console.log('add this to your visited country')
        console.log(country)
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }
    const handleVisitedFlags = (flag)=>{
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag)
        console.log(flag)
        console.log('tui flags diya ki korbi')
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li> )
                    }
                </ul>
            </div>

            
                <div className="flags-container">
                    
                    {
                    visitedFlags.map((flag, indx)=> <img key={indx} src={flag} alt="" /> )
                    }
                </div>
            
            <div className="countries-container">

            {
                countries.map((country)=> 
                <Country 
                key={country.cca3} 
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
                >

                </Country>)
            }
            </div>

        </div>
    );
};

export default Countries;