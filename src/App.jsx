import { useState, useEffect } from "react";
import CardComponent from "./components/CardComponent.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchComponent from "./components/SearchComponent.jsx";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

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

  // Update the useEffect hook to also filter based on the search query
  useEffect(() => {
    let filtered = countries;

    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  }, [countries, selectedRegion, searchQuery]);

  // Add event listener to detect scroll position
  useEffect(() => {
    const checkScrollTop = () => {
      setIsScrolling(window.scrollY > 200);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-very-dark-blue-background min-h-screen">
      <Navbar />
      <div className="container">
        <SearchComponent
          setSelectedRegion={setSelectedRegion}
          selectedRegion={selectedRegion}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
          {filteredCountries.map((country, index) => (
            <CardComponent key={index} country={country} />
          ))}
        </div>
      </div>
      {/* Conditionally render the scroll-to-top button */}
      {isScrolling && (
        <button
          className="fixed bottom-5 right-5 bg-dark-blue-elements text-white rounded-full p-6"
          onClick={scrollToTop}
        >
          Top
        </button>
      )}
    </main>
  );
}

export default App;
