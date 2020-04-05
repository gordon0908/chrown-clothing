import React from 'react';

import './custom-button.scss';

export default ({ children, IsGoogleButton, invented, ...otherProps}) => (
    <button className={`${invented? 'invented':''} ${IsGoogleButton? 'google-button' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);
