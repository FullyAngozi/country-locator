import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetailPage = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${cca3}`
        );
        const data = await response.json();
        setCountry(data[0]); // Assuming the API returns an array, take the first item
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryData();
  }, [cca3]); // Re-run the effect if cca3 changes

  if (!country) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-white">
      <Link to="/" className="mt-4 mb-10 inline-block">
        <button className="bg-dark-blue-elements hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Back
        </button>
      </Link>

      <div className="md:flex items-center gap-20">
        <div className="md:max-w-lg">
          <img
            src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
            alt={country.name.common}
            className=""
          />
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-2xl my-4">{country.name.common}</h2>
          <div className=" md:flex items-center gap-20">
              <div className="flex flex-col gap-3">
                <p className=" font-bold text-lg">Native Name: <span className=" text-very-light-gray-background font-light text-base">{country.name.official}</span></p>
                <p className=" font-bold text-lg">Population: <span className=" text-very-light-gray-background font-light text-base">{country.population.toLocaleString()}</span> </p>
                <p className=" font-bold text-lg">Region: <span className=" text-very-light-gray-background font-light text-base">{country.region}</span></p>
                <p className=" font-bold text-lg">Sub Region: <span className=" text-very-light-gray-background font-light text-base">{country.subregion}</span></p>
                <p className=" font-bold text-lg">Capital: <span className=" text-very-light-gray-background font-light text-base">{country.capital?.join(", ")}</span></p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <p>Top Level Domain: {country.tld?.join(", ")}</p>
                <p>
                  Currencies:{" "}
                  {Object.values(country.currencies ?? {})
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  Languages: {Object.values(country.languages ?? {}).join(", ")}
                </p>
              </div>
          </div>
          <div className="mt-3">
            <h3 className="font-bold text-xl mb">Border Countries:</h3>
            <div className="flex gap-5">
              {country.borders?.map((border) => (
                <span key={border}>{border}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
