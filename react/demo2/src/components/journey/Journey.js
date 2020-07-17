import React from 'react';
import PropTypes from 'prop-types';
// import './Journey.css';

export default function Journey(props) {
  
  const{from,to,exchangeFromTo} = props;
  return (
  
      <div class="journey">
        <div className="journey-station">
          <input type="text" className="journey-input" name="from">
        </div>
      </div>
   
  )
}


Journey.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired
}