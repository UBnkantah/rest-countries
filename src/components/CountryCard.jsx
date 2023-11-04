import { Link } from "react-router-dom"
import "../App.css"

const CountryCard = ({country}) => {
    const {flag, name, region, population, capital} = country

    const darkCheck = document.body.classList.toggle("dark")
    console.log("darkCheck", darkCheck)

  return (
    <Link to={name}>
        <div className="w-48 rounded shadow h-72" key={name} >
        <img src={flag} alt="img" className="w-full rounded"/>
        <div>
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
    
  )
}

export default CountryCard