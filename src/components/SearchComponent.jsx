import PropTypes from 'prop-types';

const SearchComponent = ({ setSelectedRegion, selectedRegion, searchQuery, setSearchQuery }) => {
  function handleSelectedRegion(event) {
    console.log(selectedRegion);
    setSelectedRegion(event.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value)
  }
  return (
    <div className=" lg:flex justify-between lg:items-center mt-5 ">
      {/* Search Form */}
      <form className=" flex-grow">
        <div className="relative lg:w-3/5">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0  0  20  20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19  19-4-4m0-7A7  7  0  1  1  1  8a7  7  0  0  1  14  0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-16 text-sm text-very-light-gray-background rounded-lg bg-dark-blue-elements focus:ring-0 focus:border-0 border-0"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={handleSearchQuery}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={handleOnSubmit}
          >
            Search
          </button>
        </div>
      </form>

      {/* Select Dropdown Form */}
      <form className=" mt-10 lg:mt-0">
        <select
          id="countries"
          className="bg-dark-blue-elements text-very-light-gray-background p-3 border border-gray-300  text-sm rounded-lg focus:ring-0 focus:border-0 block w-full "
          onChange={handleSelectedRegion}
        >
          <option selected>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

SearchComponent.propTypes = {
  setSelectedRegion: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
 };
 

export default SearchComponent;
