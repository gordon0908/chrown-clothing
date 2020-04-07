import React from 'react';

import { CustomeButtonContainer } from './customer-button.styled';

export default ({ children, ...otherProps}) => (
    <CustomeButtonContainer {...otherProps}>
        {children}
    </CustomeButtonContainer>
);


// import './custom-button.scss';

// export default ({ children, IsGoogleButton, invented, ...otherProps}) => (
//     <button className={`${invented? 'invented':''} ${IsGoogleButton? 'google-button' : ''} custom-button`} {...otherProps}>
//         {children}
//     </button>
// );
