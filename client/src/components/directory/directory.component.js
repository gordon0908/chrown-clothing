import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';
import './directory.component.scss';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map( item => (
                <MenuItem key={item.id} {...item}/>
            ))}
        </div>
    )
}

const mapDispatchToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapDispatchToProps)(Directory);
