
import PropTypes from 'prop-types';

const CardComponent = ({ country }) => {
  return (
    <div className="mt-10 max-w-sm border border-very-dark-blue-background bg-dark-blue-elements rounded-lg shadow cursor-pointer">
      <div className=' w-[382px] overflow-hidden h-[200px]'>
        <img src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`} alt={country.name.common} className="rounded-t-lg w-full h-full object-cover" />
      </div>
      <div className="mt-8">
        <div className="w-3/4 mx-auto mb-20">
          <h2 className="font-semibold text-white text-3xl mb-5">{country.name.common}</h2>
          <p className="text-very-light-gray-background font-light mb-2"><span className="text-white lg:text-lg">Population:</span> {country.population.toLocaleString()}</p>
          <p className="text-very-light-gray-background font-light mb-2"><span className="text-white lg:text-lg">Region:</span> {country.region}</p>
          <p className="text-very-light-gray-background font-light mb-2"><span className="text-white lg:text-lg">Capital:</span> {country.capital}</p>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  country: PropTypes.shape({
    cca2: PropTypes.string,
    name: PropTypes.shape({
      common: PropTypes.string,
    }),
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
    // Add other expected properties of the country object here
  }),
};

export default CardComponent;
