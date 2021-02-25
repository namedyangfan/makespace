// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navigation from './component/Navbar'
import SelectStoragePlan from './component/SelectStoragePlan'
function App() {
  return (
    <div className="App">
      <Navigation />
      <SelectStoragePlan />
    </div>
  );
}

export default App;
