import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryItems } from '../../redux/directory/directory.selector';

const Directory = ({ section }) => {
  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: selectDirectoryItems,
});

export default connect(mapStateToProps)(Directory);
