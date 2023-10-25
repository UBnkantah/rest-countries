import { Link, useParams } from "react-router-dom";
import CountriesData from "../data.json";
import {BsArrowLeft} from "react-icons/bs"

const CountryPg = () => {
  const { country } = useParams();
  let countryInfo = CountriesData;

  countryInfo = countryInfo.find((single) => single.name.toLocaleLowerCase() === country.toLocaleLowerCase())
  console.log("country information", countryInfo)
  return (
    <div>
      <Link to="/">
        <button>
        <BsArrowLeft />
        Back
      </button>
      </Link>
      
        <div className="flex flex-wrap gap-4 justify-evenly align-middle p-3">
        <div className="w-1/3">
          <img src={countryInfo.flag} alt={countryInfo.name} />
        </div>
        <div className="w-1/3">
          <div  className="flex justify-between align-middle ">
            <div>
              <h2>{countryInfo.name}</h2>
              <div>
                <strong>Native Name:</strong>
                {countryInfo.nativeName}
              </div>
              <div>
                <strong>Population:</strong>
                {countryInfo.population}
              </div>
              <div>
                <strong>Region:</strong>
                {countryInfo.region}
              </div>
              <div>
                <strong>Sub Region:</strong>
                {countryInfo.subregion}
              </div>
              <div>
                <strong>Capital:</strong>
                {countryInfo.capital}
              </div>
            </div>
            <div>
              <div>
                <strong>Top Level Domain:</strong>
                {countryInfo.topLevelDomain}
              </div>

              <div>
                <strong>Currencies:</strong>
                {countryInfo.currencies.map(cur => (
                  <p>{cur.name}</p>
                ))}
              </div>
              <div>
                <strong>Languages:</strong>
                {countryInfo.languages.map(item => (
                  <p>{item.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPg;
