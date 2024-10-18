import { useState } from "react";

function Country({country}) {
    const {flags,name, capital, population, area} = country;
    const [isVisited, setIsVisited] = useState(false);
    const handleIsVisited = () => {
        setIsVisited(!isVisited);
    } 
    return (
        <div style={{border:'2px solid tomato', margin:'20px', padding:'20px',textAlign:'left', borderRadius:'10px'}}>
            <div>
                <img  style={{width:'100%', height:'200px'}} src={flags.png} alt="" />
            </div>
            <h2>{name?.common}</h2>
            <h3>Capital : {capital}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleIsVisited} style={{width:'100%',height:'56px', backgroundColor:'#888',color:'black', border:'none', outline:'none', borderRadius:'10px',fontSize:'18px',fontWeight:'bold'}}>{isVisited ? 'Visited' : 'Visit'}</button>
        </div>
    );
}

export default Country;