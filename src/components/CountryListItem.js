import React from 'react';

const CountryListItem = (props) => {
    return ( 
        <li className="list-group-item" style={{width:'50%'}}>
          <img className="media-object" alt="flag" src={props.country.flag} style={{width:'20px'}}/>
          
        {props.country.name}

        <button>+</button>
      </li>
     );
}
 
export default CountryListItem;