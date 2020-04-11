import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './withspinner.styled';

export const WithSpinner = ComponentWrap => ({ loading, ...props}) => {
    return loading? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay> : <ComponentWrap {...props}/>
}