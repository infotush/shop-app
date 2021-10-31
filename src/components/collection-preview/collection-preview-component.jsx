import React from 'react';
import './collection-preview-style.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItems }) => (
          <CollectionItem key={id} {...otherItems}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;