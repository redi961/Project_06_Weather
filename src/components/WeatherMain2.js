import {useNavigate} from 'react-router-dom'
import weather2 from '../db/weather2.json'
import item from '../db/item.json'
import './styles/wStyle.css'

export default function WeatherMain2 () {
  const w2 = weather2.response.body.items.item;
  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
  const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };
  console.log(w2);

  const navigator = useNavigate();

  const handleClick = (k) => {
    const url = {
      '홈' : '/'
    }
    navigator(url[k]);
  }

  // let lis = [] ;
  // for (let w of w2) {
    // switch (w) {
    //   case "POP" : 
    //     lis.push(<li key ={w.category}>item[w.category][0] : {w.obsrValue} item[w.category]</li>)
    //     break;
    //   case "PTY" :
    //     lis.push(<li key ={w.category}>"강수형태" : {w.obsrValue} (1 mm) </li>)
    //     break; 
    // }
    // if (w.category === 'PTY') {

    // }else if (w.category === 'SKY') {

    // }else {
    //   lis.push(<li key ={w.category}>{w.category} : {w.obsrValue}</li>)
    // }
  
  /* for (let w of w2) {
    lis.push(m)
  } == 
  let lis = w2.map((m) => 
  <li>m.category</li>);
  */

  const lis = Object.entries(w2).map((m) => 
    (m[1].category === 'PTY' ?
    (<li className='w2li' key ={m[1].category}>
      <span className='keys'>{item[m[1].category][0]}</span>&nbsp;
      <span className='values'>{pty[m[1].obsrValue]}</span>
      </li>)
      : (m[1].category === 'SKY' ?
    (<li className='w2li' key ={m[1].category}>
      <span className='keys'>{item[m[1].category][0]}</span>&nbsp;
      <span className='values'>{sky[m[1].obsrValue]}</span>
      </li>)
      : <li className='w2li' key ={m[1].category}>
      <span className='keys'>{item[m[1].category][0]}</span>&nbsp;
      <span className='values'>{m[1].obsrValue}
      {item[m[1].category][1]}</span>
      </li>)
  ));

  return (
    <>
      <header><h1>날씨 단기정보</h1></header>
      <div className='disP'>{lis}</div>
      <div className='footer'><button className='btn' onClick={() => handleClick('홈')}>홈으로 돌아가기</button></div>
    </>
  );
  }
