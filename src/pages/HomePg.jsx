import CountryCard from '../components/CountryCard'
import CountriesData from "../data.json"
import { useState } from 'react'

const HomePg = () => {
    const [search, setSearch] = useState('');
    const [regionCheck, setRegionCheck] = useState('')
    const regionOption = ["Africa", "Americas", "Asia", "Europe", "Oceania"] 

    // console.log("Region", regionCheck)
    // console.log("Search", search)

    let filteredCountry = CountriesData;

    // console.log("filtered items", filteredCountry)

    if(search){
        filteredCountry = filteredCountry.filter((country) => country.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
    }
    if(regionCheck){
        filteredCountry = filteredCountry.filter((country) => country.region === regionCheck)
    }


  return (
    <div className="container">
      <div className="flex flex-wrap justify-between px-10 align-middle pt-5 pb-10">
        <div>
          <input
            type="text"
            placeholder="Search for a country"
            className="p-2 border border-black dark:border-white rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <select
            value={regionCheck}
            onChange={(e) => setRegionCheck(e.target.value)}
            className="border border-black dark:border-white ps-4 pe-4 py-2 rounded-xl"
          >
            <option value="">Filter by Region</option>
            {regionOption.map((option) => (
              <option>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt 10 ">
        {filteredCountry.map((country, index) => (
          <CountryCard country={country} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HomePg