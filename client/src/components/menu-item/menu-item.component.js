import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './mednu-item.styled';
const MenuItem = ({ id, title, imageUrl, linkUrl, size, history, match }) => {
    // console.log(history, match)
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}
             >
            <BackgroundImageContainer style={{ backgroundImage: `url(${imageUrl})`}} className="background-image"></BackgroundImageContainer>
    
            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);
