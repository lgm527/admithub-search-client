import React from 'react';

const CountryListItem = (props) => {
    return ( 
      props.add ?
        <li className="list-group-item">
        <img className="media-object" alt="flag" src={props.country.flag} style={{width:'20px', float:'left'}}/>
        
        {props.country.name}

        <button onClick={() => props.add(props.country)} style={{float:'right'}}>+</button>
        </li>
      :
        <li className="list-group-item">
        <img className="media-object" alt="flag" src={props.country.flag} style={{width:'20px', float:'left'}}/>
        
        {props.country.name}

        <button onClick={() => props.remove(props.country)} style={{float:'right'}}>x</button>
        </li>
     );
}
 
export default CountryListItem;