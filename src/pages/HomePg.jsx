import CountryCard from '../components/CountryCard'
import CountriesData from "../data.json"
import { useState } from 'react'

const HomePg = () => {
    const [search, setSearch] = useState('');
    const [regionCheck, setRegionCheck] = useState('')
    const regionOption = ["Africa", "Americas", "Asia", "Europe", "Oceania"] 

    console.log("Region", regionCheck)
    console.log("Search", search)

    let filteredCountry = CountriesData;

    console.log("filtered items", filteredCountry)

    if(search){
        filteredCountry = filteredCountry.filter((country) => country.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
    }
    if(regionCheck){
        filteredCountry = filteredCountry.filter((country) => country.region === regionCheck)
    }


  return (
    <div>
        <div className='flex flex-wrap justify-between px-10 align-middle'>
            <div>
                <input type="text" placeholder='Search for a country' className='p-2 border-cyan-500 rounded' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <select value={regionCheck} onChange={(e) => setRegionCheck(e.target.value)}>
                    <option value="">Filter by Region</option>
                    {regionOption.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className='flex flex-wrap gap-5 justify-center align-middle px-5 pt-5'>
        {filteredCountry.map((country, index) => (
            <CountryCard country={country} key={index} /> 
        ))}
           
        
    </div>
    </div>
    
  )
}

export default HomePg