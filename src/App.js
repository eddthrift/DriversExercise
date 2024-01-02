import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout'
import DriverSummary from './pages/driversummary/DriverSummary';

function App() {
  return (
    <Router className="App">
      <MainLayout>
        <Routes>
          <Route path='' element={<DriverSummary/>}/>
          <Route path='/drivers' element={<h1>drivers</h1>}/>
          <Route path='/vehicles' element={<h1>vehicles</h1>}/>
          <Route path='/about' element={<h1>about</h1>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
