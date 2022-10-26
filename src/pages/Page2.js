import { useLocation } from "react-router-dom";
import qs from 'query-string'

export default function Page2 () {
  const loc = useLocation().search;
  console.log(loc)

  const q = qs.parse(loc);
  console.log(q);

  // let loc2 = loc.replace('?', '').split('&')
  // // '='을 기준으로 문단을 나눔
  // loc2 = loc2.map((m) => m.split('=')([1])
  // console.log(loc2)

  return (
  <>
    <h1>Page2</h1>
    {Object.keys(q).length === 0 ? <h2>전달 자료가없습니다</h2> : <h2> {q.item} ( {q.item2} )</h2>}
  </>
);
}