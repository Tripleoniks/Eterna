import React from 'react';
import './customButton.scss';

const CustomButton = ({color, text}) => {
    return ( 
        <div className="cus-btn">
           <button style={{backgroundColor: color}}>{text}</button>
        </div>
     );
}
 
export default CustomButton;