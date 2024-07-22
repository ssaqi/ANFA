import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navigation from './Components/Nav/Navigation.js';
import Homepage from './Pages/Home/index.js';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Homepage/>
    </div>
  );
}

export default App;
