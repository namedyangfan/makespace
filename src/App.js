import { Provider } from 'react-redux';
import store from './store';

import './App.scss';
import Navigation from './component/Navbar'
import SelectStoragePlan from './component/SelectStoragePlan'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <SelectStoragePlan />
      </div>
    </Provider>
  );
}

export default App;
