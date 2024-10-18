// import { useEffect } from "react";
// import { useState } from "react";
// import Country from "../Country/Country";
// import './Countries.css'

// const Countries = () => {

//     // useState Hooks 

//     const [countries, setCountries] = useState([]);
//     const [visitedCountries, setVisitedCountries] = useState([]);
//     const [visitedFlags, setVisitedFlags] = useState([])

//     // Event handler Functions

//     const handleVisitedCountry = (country) => {
//         const newVisitedCountries = [...visitedCountries, country];
//         setVisitedCountries(newVisitedCountries);
//     }
//     const handleVisitedFlags = (flag) => {
//         const newVisitedFlags = [...visitedFlags,flag]
//         setVisitedFlags(newVisitedFlags);
//     }

//     // useEffect Hooks 

//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(res => res.json())
//             .then(data => setCountries(data))
//     }, [])

//     // JSX code

//     return (
//         <div>
//             <h2 style={{ textAlign: 'center' }}>Countries: {countries.length}</h2>
//             <div style={{ paddingLeft: '20px' }}>
//                 <h2>
//                     Visited Countries: {visitedCountries.length}
//                 </h2>
//                 <ul>
//                     {
//                         visitedCountries.map(country => <li key={country.cca3}>{country.name.common} </li>)
//                     }
//                 </ul>
//             </div>
//             <div style={{width:'50px', height:'30px'}}>
//                 {
//                     visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
//                 }
//             </div>
//             <div className="country-container">
//                 {
//                     countries.map(country => <Country
//                         key={country.cca3}
//                         handleVisitedFlags={() => handleVisitedFlags(flags)}
//                         handleVisitedCountry={() => handleVisitedCountry(country)}
//                         country={country}></Country>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Countries;



import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    // useState Hooks 
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    // Event handler Functions
    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // useEffect Hooks 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    // JSX code
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Countries: {countries.length}</h2>
            <div style={{ paddingLeft: '20px' }}>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common} </li>)
                    }
                </ul>
            </div>
            <div>
                <h3 style={{paddingLeft:'20px'}}>Visited Flags:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', padding:'20px' }}>
                    {
                        visitedFlags.map((flag, index) => (
                            <img key={index} src={flag} alt="Visited Flag" style={{ width: '100px', height: '56px', margin: '5px' }} />
                        ))
                    }
                </div>
            </div>
            <div className="country-container">
                {
                    countries.map(country => (
                        <Country
                            key={country.cca3}
                            handleVisitedFlags={() => handleVisitedFlags(country.flags.png)}
                            handleVisitedCountry={() => handleVisitedCountry(country)}
                            country={country}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;
