import React from 'react';
import CountryListItem from "../components/CountryListItem";

const SearchList = (props) => {
    console.log(props);
    let results = props.results.map((country) => <CountryListItem key={country.numericCode} country={country} />)
    return ( 
        <div>
            {results}
        </div>
     );
}
 
export default SearchList;