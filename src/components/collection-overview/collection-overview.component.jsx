import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview-component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionOverview } from '../../redux/shop/shop.selector';
import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollections }) => (
        <CollectionPreview key={id} {...otherCollections}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
