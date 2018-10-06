import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import HomePageContainer from './home_page_components/home_page_container';
import ListingsPageContainer from './listings_page_components/listings_page_container';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/listings/:page/:min/:max" component={ListingsPageContainer} />
        <Route exact path="/" component={HomePageContainer} />
      </div>
    </HashRouter>
  </Provider>
);