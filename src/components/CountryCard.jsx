import { Link } from "react-router-dom"
import "../App.css"

const CountryCard = ({country}) => {
    const {flag, name, region, population, capital} = country

    const darkCheck = document.body.classList.toggle("dark")
    // console.log("darkCheck", darkCheck)

  return (
    <Link to={name}>
      <div className="w-full rounded shadow-md bg-[#f1f1f1] dark:bg-[#1f2937]">
        <img src={flag} alt="img" className="w-full rounded h-40" />
        <div className="px-4 py-2">
          <h4>{name}</h4>
          <div className="flex">
            <p>Population</p>
            <p>{population}</p>
          </div>
          <div className="flex">
            <p>Region</p>
            <p>{region}</p>
          </div>
          <div className="flex">
            <p>Capital</p>
            <p>{capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard