import w from '../db/weather.json'
import {useNavigate} from 'react-router-dom'

export default function WeatherDay (probs) {
  const d = probs.d;
  //DB상 필요한 자료가 있는 경로까지 설정
  //item항목은 1개 크기의 *배열* 이므로 [0]으로 지목함
  const witem = w.response.body.items.item[0];
  console.log(witem);

  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`]
  for (let k of keys) {
    items.push(witem[k]);
  }
  console.log(items);

  const navigator = useNavigate();

  const handleClick = (k) => {
    const url = {
      '홈' : '/'
    }
    navigator(url[k]);
  }

  return (
    <>
    <div className='disPZone'>

        <div className="infoSection"><li className='w1li'> <span className='dDay'>{d}일후 </span><br/> 
         오전 강수량  <br/>
        <span className='values'>{items[0]}% </span></li></div>
        <div className="infoSection"><li className='w1li'> <span className='dDay'>{d}일후 </span><br/>
         오후 강수량 <br/>
         <span className='values'>{items[1]} % </span></li></div>
         <div className="infoSection"> <li className='w1li'> <span className='dDay'>{d}일후 </span><br/>
          오전 날씨예보 <br/>
         <span className='values'>{items[2]}</span></li></div>
         <div className="infoSection"> <li className='w1li'> <span className='dDay'>{d}일후 </span><br/>
          오후 날씨예보 <br/>
        <span className='values'>{items[3]}</span></li></div>
    </div>

    <div className='footer'><button className='btn' onClick={() => handleClick('홈')}>홈으로 돌아가기</button></div>
    </>
  );
}