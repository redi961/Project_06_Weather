import {useNavigate} from 'react-router-dom'
import './styles/wStyle.css'

export default function Navy () {

  const navigator = useNavigate();

  const handleClick = (k) => {
    const url = {
      '단기' : '/WeatherMain',
      '중기' : '/weatherMain2'
    }
    navigator(url[k]);
  }

  return (
    <>
    <header><h1>일기예보</h1></header>
    <div className="selectZone">
      <button className="bigbtn" onClick={() => handleClick('단기')}>단기예보</button>
      <button className="bigbtn" onClick={() => handleClick('중기')}>중기예보</button>
    </div>
  </>
  );
  
}