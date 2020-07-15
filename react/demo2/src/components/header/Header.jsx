import  React  from 'react';
import propTypes from 'prop-types';
import './Header.css';

export default function Header(props){
    console.log(title);
    const{title}= props;
    
    return (
        <div className="header">
            console.log(props.title)
            <div className="header-back">
                <svg width='42' height='42'>
                    <polyline  
                    point="25,13 16,21 25,29"
                    stroke="#fff"
                    strokwidth="2"/>
                    

                </svg>
            </div>
            <div className="header-title"></div>
        </div>
    )
}
Header.prototypes = {
    title:protypes.string.inRequired
}