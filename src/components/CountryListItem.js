import React from 'react';

const CountryListItem = (props) => {
    return ( 
      props.add ?
        <li className="list-group-item">
        <img className="media-object" alt="flag" src={props.country.flag} style={{width:'20px'}}/>
        
        {props.country.name}

        <button onClick={() => props.add(props.country)}>+</button>
        </li>
      :
        <li className="list-group-item">
        <img className="media-object" alt="flag" src={props.country.flag} style={{width:'20px'}}/>
        
        {props.country.name}

        <button onClick={() => props.remove(props.country)}>x</button>
        </li>
     );
}
 
export default CountryListItem;