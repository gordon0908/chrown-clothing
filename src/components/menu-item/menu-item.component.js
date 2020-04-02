import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.component.scss';

const MenuItem = ({ id, title, imageUrl, linkUrl, size, history, match }) => {
    console.log(history, match)
    return (
        <div className={`menu-item ${size}`} 
             onClick={() => history.push(`${match.url}${linkUrl}`)}
             >
            <div style={{ backgroundImage: `url(${imageUrl})`}} className="background-image"></div>
    
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
