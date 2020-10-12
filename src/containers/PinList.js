import React from 'react';
import CountryListItem from "../components/CountryListItem";

const PinList = (props) => {
    let pins = props.pins.map((country) => <CountryListItem key={country.name} country={country} remove={props.remove} />)
    return ( 
        <div>
            <h1>Pins</h1>
            {pins}
        </div>
     );
}
 
export default PinList;