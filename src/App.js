import './App.css';
import WeatherMain from './components/WeatherMain'
import WeatherMain2 from './components/WeatherMain2';
import {Route, Routes} from 'react-router-dom';
import Navy from './components/Navy';

function App() {
  return (
    <>
      <Routes>
        <Route path ='/Project_06_Weather' element ={<Navy/>} />
        <Route path ='/' element ={<Navy/>} />
        <Route path ='/WeatherMain' element ={<WeatherMain/>} />
        <Route path ='/WeatherMain2' element ={<WeatherMain2/>} />
      </Routes>
    </>
  );
}

export default App;

