import React from 'react';


import { HomePageStyled } from './homepage.styled';
import Directory from '../../components/directory/directory.component';
// import './homepage.component.scss';

const Homepage = () => {
    // throw Error;
    return (
        <HomePageStyled>
            <Directory />
        </HomePageStyled>
    );
}

export default Homepage;