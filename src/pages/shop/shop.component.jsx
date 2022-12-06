import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../category/collection.component';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utility';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
