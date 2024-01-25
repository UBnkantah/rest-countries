import { Link, useParams } from "react-router-dom";
import CountriesData from "../data.json";
import {BsArrowLeft} from "react-icons/bs"

const CountryPg = () => {
  const { country } = useParams();
  let countryInfo = CountriesData;

  countryInfo = countryInfo.find((single) => single.name.toLocaleLowerCase() === country.toLocaleLowerCase())
  console.log("country information", countryInfo)
  return (
    <div className="container">
      <Link to="/">
        <button className="flex flex-row shadow-xl px-3 py-1 items-center rounded-xl text-xl gap-2 font-[600] bg-[#f1f1f1] dark:bg-[#1f2937] mt-4">
          <BsArrowLeft size={30} />
          Back
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
        <div className="">
          <img
            src={countryInfo.flag}
            alt={countryInfo.name}
            className="shadow-xl rounded-xl"
          />
        </div>
        <div className="">
          <h2 className="text-xl font-[600] pb-4">{countryInfo.name}</h2>
          <div className="flex justify-between align-middle ">
            <div>
              <div className="flex flex-row gap-1">
                <strong>Native Name:</strong>
                {countryInfo.nativeName}
              </div>
              <div className="flex flex-row gap-1">
                <strong>Population:</strong>
                {countryInfo.population}
              </div>
              <div className="flex flex-row gap-1">
                <strong>Region:</strong>
                {countryInfo.region}
              </div>
              <div className="flex flex-row gap-1">
                <strong>Sub Region:</strong>
                {countryInfo.subregion}
              </div>
              <div className="flex flex-row gap-1">
                <strong>Capital:</strong>
                {countryInfo.capital}
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-1">
                <strong>Top Level Domain:</strong>
                {countryInfo.topLevelDomain}
              </div>

              <div className="flex flex-row gap-1">
                <strong>Currencies:</strong>
                {countryInfo.currencies.map((cur) => (
                  <p>{cur.name}</p>
                ))}
              </div>
              <div className="flex flex-row gap-1">
                <strong>Languages:</strong>
                {countryInfo.languages.map((item) => (
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
