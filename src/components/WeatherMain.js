import WeatherDay from "./WeatherDay";
import {useState} from 'react' ;
import './styles/wStyle.css'

function WeatherMain () {
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    console.log(d);
    setDay(d);
  }
  
  return (
    <>
      <header><h1>날씨예보</h1></header>
      <form>
        <div className="buttonZone">
        <button className="btn" onClick={(e) => {e.preventDefault(); handleClick(3);}}>3일후 날씨</button>
        <button className="btn" onClick={(e) => {e.preventDefault(); handleClick(4);}}>4일후 날씨</button>
        <button className="btn" onClick={(e) => {e.preventDefault(); handleClick(5);}}>5일후 날씨</button>
        <button className="btn" onClick={(e) => {e.preventDefault(); handleClick(6);}}>6일후 날씨</button>
        </div>
      </form>
      <WeatherDay d={day}/>
    </>
  );
} export default WeatherMain;