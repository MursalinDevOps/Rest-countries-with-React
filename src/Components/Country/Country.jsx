function Country({country}) {
    const {flags,name, capital,currencies} = country;
    return (
        <div style={{border:'2px solid tomato', margin:'20px', padding:'20px', borderRadius:'10px'}}>
            <div><img src={flags.png} alt="" /></div>
            <h2>Country Name: {name?.common}</h2>
            <h3>Capital city : {capital}</h3>
        </div>
    );
}

export default Country;