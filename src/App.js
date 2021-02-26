import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';

import './App.scss';
import Navigation from './component/Navbar';
import SelectStoragePlan from './component/SelectStoragePlan';
import Checkout from './component/Checkout';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <SelectStoragePlan />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
