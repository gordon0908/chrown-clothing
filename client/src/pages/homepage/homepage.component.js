import React, { Profiler } from 'react';


import { HomePageStyled } from './homepage.styled';
import Directory from '../../components/directory/directory.component';
// import './homepage.component.scss';

const Homepage = () => {
    // throw Error;
    return (
        <HomePageStyled>
            <Profiler id="directory" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {
                console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
            }}>
                <Directory />
            </Profiler>
            
        </HomePageStyled>
    );
}

export default Homepage;
