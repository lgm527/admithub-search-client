import React from 'react';
import CountryListItem from "../components/CountryListItem";

const SearchList = (props) => {
    let results = props.results.map((country) => <CountryListItem key={country.numericCode} country={country} add={props.add} />)
    return ( 
        <div>
            {results}
        </div>
     );
}
 
export default SearchList;