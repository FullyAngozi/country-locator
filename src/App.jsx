import { useState, useEffect } from "react";
import CardComponent from "./components/CardComponent.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchComponent from "./components/SearchComponent.jsx";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data); // Initialize filteredCountries with all countries
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountriesData();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Filter countries based on selectedRegion
    if (selectedRegion === "") {
      // If no region is selected, show all countries
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(filtered);
    }
  }, [countries, selectedRegion]);

  return (
    <main className="bg-very-dark-blue-background min-h-screen">
      <Navbar />
      <div className="container">
        <SearchComponent
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
        />
        <div className="lg:grid lg:grid-cols-3">
          {filteredCountries.map((country, index) => (
            <CardComponent key={index} country={country} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
