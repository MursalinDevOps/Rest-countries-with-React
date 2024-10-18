// import { useState } from "react";

// function Country({ country, handleVisitedCountry, handleVisitedFlags }) {
//     const { flags, name, capital, population, area } = country;
//     const [isVisited, setIsVisited] = useState(false);


//     const handleIsVisited = () => {
//         setIsVisited(!isVisited);
//     }

//     return (
//         <div style={{ border: '2px solid tomato', margin: '20px', padding: '20px', textAlign: 'left', borderRadius: '10px' }}>
//             <div>
//                 <img style={{ width: '100%', height: '200px' }} src={flags.png} alt="" />
//             </div>
//             <h2>{name?.common}</h2>
//             <h3>Capital : {capital}</h3>
//             <p>Population: {population}</p>
//             <p>Area: {area}</p>
//             {/* VISIT button */}
//             <button 
//                 onClick={handleIsVisited} 
//                 style={{ width: '100%', height: '56px', backgroundColor: isVisited ? '#fff' : '#888', color: 'black', border: 'none', outline: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold' }}>
//                     {/* conditional innerText of "VISIT" button */}
//                     {isVisited ? 'Visited' : 'Visit'}
//             </button>
//             <br />
//             <hr />
//             {/* MARK AS VISITED button */}
//             <button 
//                 onClick={handleVisitedCountry}
//                 style={{ width: '100%', height: '56px', backgroundColor: 'tomato', border: 'none', outline: 'none', borderRadius: '10px', fontSize: '18px' }}>
//                 Mark as Visited
//             </button>
//             <br />
//             <hr />
//             {/* VISITED FLAGS button */}
//             <button 
//             onClick={() => handleVisitedFlags(country.flags.png)}
//              style={{ width: '100%', height: '56px', backgroundColor: 'rebeccapurple', border: 'none', outline: 'none', borderRadius: '10px', fontSize: '18px' }}>Visited Flags </button>
//         </div>
//     );
// }

// export default Country;

import { useState } from "react";

function Country({ country, handleVisitedCountry, handleVisitedFlags }) {
    const { flags, name, capital, population, area } = country;
    const [isVisited, setIsVisited] = useState(false);

    const handleIsVisited = () => {
        setIsVisited(!isVisited);
    }
    
    return (
        <div style={{ border: '2px solid tomato', margin: '20px', padding: '20px', textAlign: 'left', borderRadius: '10px' }}>
            <div>
                <img style={{ width: '100%', height: '200px' }} src={flags.png} alt={name.common} />
            </div>
            <h2>{name?.common}</h2>
            <h3>Capital : {capital}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            {/* VISIT button */}
            <button 
                onClick={handleIsVisited} 
                style={{ width: '100%', height: '56px', backgroundColor: isVisited ? '#fff' : '#888', color: 'black', border: 'none', outline: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                    {/* conditional innerText of "VISIT" button */}
                    {isVisited ? 'Visited' : 'Visit'}
            </button>
            <br />
            {/* MARK AS VISITED button */}
            <button 
                onClick={handleVisitedCountry}
                style={{ marginTop:'10px',marginBottom:'10px' ,width: '100%', height: '56px', backgroundColor: 'tomato', border: 'none', outline: 'none', borderRadius: '10px', fontSize: '18px' }}>
                Mark as Visited
            </button>
            <br />
            {/* VISITED FLAGS button */}
            <button 
                onClick={() => handleVisitedFlags(flags.png)}
                style={{ width: '100%', height: '56px', backgroundColor: 'rebeccapurple', border: 'none', outline: 'none', borderRadius: '10px', fontSize: '18px' }}>
                Visited Flags
            </button>
        </div>
    );
}

export default Country;
