import {Link, useNavigate} from 'react-router-dom'
export default function Home () {
  const navigator = useNavigate();

  const handleClick = (k) => {
    //조건식 이용
  //   let url2 = null;
  //   switch (k) {
  //     case '사과' :
  //       url2 = '/p2/?item=사과&item2=과일'
  //       break;
  //     case '바나나' :
  //       url2 = 'p2/?item=바나나&item2=과일'
  //       break;
  //     default:
  //       url2 = '/p2/?item=당근&item2=채소'
  //       break;  
  //   }
  //   navigator(url2)
  // }

    // 오브젝트 이용 (권장)
    const url = {
      '사과' : '/p2/?item=사과&item2=과일',
      '바나나' : 'p2/?item=바나나&item2=과일',
      '당근' : '/p2/?item=당근&item2=채소'
    }
    navigator(url[k]);
  }

  return (
  <>
    <h1>Home</h1>

    <h2>Page1으로 이동</h2>
    <ul>
       <li><Link to ='/p1/사과'>사과</Link></li>
       <li><Link to ='/p1/바나나'>바나나</Link></li>
       <li><Link to ='/p1/당근'>당근</Link></li>
    </ul>
    <h2>Page2으로 이동</h2>
    <ul>
       <li><Link to ='/p2/?item=사과&item2=과일'>사과</Link></li>
       <li><Link to ='/p2/?item=바나나&item2=과일'>바나나</Link></li>
       <li><Link to ='/p2/?item=당근&item2=채소'>당근</Link></li>
    </ul>
    <h2>Page3으로 이동</h2>
       <button onClick={() => handleClick('사과')}>사과</button>
       <button onClick={() => handleClick('바나나')}>바나나</button>
       <button onClick={() => handleClick('당근')}>당근</button>
  </>
);
}