import { useState, useEffect } from "react";
import CardComponent from "./components/CardComponent";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        setCountries(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountriesData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="bg-very-dark-blue-background min-h-screen">
      <Navbar />
      <div className="container">
        <SearchComponent />{" "}
        {/* Assuming SearchComponent doesn't need any props for fetching */}
        <div className="lg:grid lg:grid-cols-3">
          {countries.map((country, index) => (
            <CardComponent key={index} country={country} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
