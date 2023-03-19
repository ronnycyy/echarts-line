// 转化成一个二维数组，如
// const data = [
//   [ 1679097660000, 8.1 ],
//   [ 1679097660000, 2.5 ],
//   [ 1679097660000, 6.8 ],
//   [ 1679097660000, 4.2 ],
// ]
// "2023-03-18 00:01:00"
function resolve(dateString) {
  const [date, time] = dateString.split(' ');
  const [year, month, day] = date.split('-');
  const [hour, minute, second] = time.split(':');
  const d = new Date();
  d.setUTCFullYear(+year);  // 1970年
  d.setUTCMonth(+month - 1); // 1月  0~11
  d.setUTCDate(+day);  // 1日  1~31
  d.setUTCHours(+hour);  // 0时  0~23
  d.setUTCMinutes(+minute);  // 0分 0~59
  d.setUTCSeconds(+second);  // 0秒 0~59
  d.setUTCMilliseconds(0);  // 0毫秒 0～999
  return d.getTime();
}

function formatTime(time) {
  const d = new Date(time)
  return `${d.getFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
}

const data1 = [
  [1679097900000, 8.1],
  [1679101260000, 4.5],
  [1679105520000, 2.5],
  [1679110240000, 6],
  [1679112965000, 7.2],
  [1679116950000, 6.8],
  [1679119696000, 9.2],
  [1679123880000, 8.3],
  [1679128202000, 0.2],
  [1679130906000, 5.5],
  [1679133609000, 4.2],
  [1679138532000, 7.2],
  [1679141379000, 12.9],
  [1679146749000, 6.2],
  [1679149819000, 2.2],
  [1679151602000, 6.2],
  [1679156406000, 8.2],
  [1679161836000, 9.2],
  [1679162950000, 8.6],
  [1679167200000, 6.2],
  [1679170209000, 3.2],
  [1679173920000, 12.6],
  [1679177769000, 5.2],
  [1679182839000, 8.2]
]

const data = [
  { x: "2023-03-18 00:05:00", y: 8.1 },
  { x: "2023-03-18 01:01:00", y: 4.5 },
  { x: "2023-03-18 02:12:00", y: 2.5 },
  { x: "2023-03-18 03:30:40", y: 6.0 },
  { x: "2023-03-18 04:16:05", y: 7.2 },
  { x: "2023-03-18 05:22:30", y: 6.8 },
  { x: "2023-03-18 06:08:16", y: 9.2 },
  { x: "2023-03-18 07:18:00", y: 8.3 },
  { x: "2023-03-18 08:30:02", y: 0.2 },
  { x: "2023-03-18 09:15:06", y: 5.5 },
  { x: "2023-03-18 10:00:09", y: 4.2 },
  { x: "2023-03-18 11:22:12", y: 7.2 },
  { x: "2023-03-18 12:09:39", y: 12.9 },
  { x: "2023-03-18 13:39:09", y: 6.2 },
  { x: "2023-03-18 14:30:19", y: 2.2 },
  { x: "2023-03-18 15:00:02", y: 6.2 },
  { x: "2023-03-18 16:20:06", y: 8.2 },
  { x: "2023-03-18 17:50:36", y: 9.2 },
  { x: "2023-03-18 18:09:10", y: 8.6 },
  { x: "2023-03-18 19:20:00", y: 6.2 },
  { x: "2023-03-18 20:10:09", y: 3.2 },
  { x: "2023-03-18 21:12:00", y: 12.6 },
  { x: "2023-03-18 22:16:09", y: 5.2 },
  { x: "2023-03-18 23:40:39", y: 8.2 },
]

function doit() {
  const result = []
  data.forEach(item => {
    const array = []
    array.push(resolve(item.x))
    array.push(item.y)
    result.push(array)
  })
  return result
}


// resolve("2023-03-18 00:01:00")

function test() {
  const d = new Date();
  d.setUTCFullYear(2023);  // 1970年
  d.setUTCMonth(2); // 1月  0~11
  d.setUTCDate(18);  // 1日  1~31
  d.setUTCHours(0);  // 0时  0~23
  d.setUTCMinutes(1);  // 0分 0~59
  d.setUTCSeconds(0);  // 0秒 0~59
  d.setUTCMilliseconds(0);  // 0毫秒 0～999
  console.log(d);
  console.log(d.getTime());
}

function main() {
  const d3 = new Date();
  d3.setUTCFullYear(1970);  // 1970年
  d3.setUTCMonth(0); // 1月  0~11
  d3.setUTCDate(1);  // 1日  1~31
  d3.setUTCHours(0);  // 0时  0~23
  d3.setUTCMinutes(0);  // 0分 0~59
  d3.setUTCSeconds(0);  // 0秒 0~59
  d3.setUTCMilliseconds(0);  // 0毫秒 0～999
  console.log(d3);
  console.log(d3.getTime());
}

// test()
