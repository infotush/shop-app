import { React } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../category/collection.component';

const ShopPage = ({ match }) => {
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
};

export default ShopPage;
