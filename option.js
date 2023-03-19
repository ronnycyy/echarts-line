/*
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
*/

const data = [
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

option = {
  xAxis: {
    // value: [数据点] 和 [坐标点] 不用一一对应，适用于连续数据。
    // categories: [数据点] 和 [坐标点] 一一对应，适用于离散数据。
    type: 'value',  
    // x轴最小值，今天 00:00 距离 1970-01-01 00:00:00 的毫秒数
    min: 1679097600000, 
    // x轴最大值，今天 23:59 距离 1970-01-01 00:00:00 的毫秒数
    max: 1679183999000,  
    // x轴刻度间隔，4h的毫秒数
    interval: 14400000, 
    axisLabel: {
      // 格式化 x 轴刻度标签成 hh:mm 的形式
      formatter: function(value) {
        const d = new Date(value)
        const hh = d.getUTCHours() > 9 ? d.getUTCHours() : `0${d.getUTCHours()}`
        const mm = d.getUTCMinutes() > 9 ? d.getUTCMinutes() : `0${d.getUTCMinutes()}`
        return `${hh}:${mm}`
      }
    },
    splitLine: {
      show: false  // 不显示垂直于 x 轴的辅助线 
    }
  },
  yAxis: {
    // value: [数据点] 和 [坐标点] 不用一一对应，适用于连续数据。
    // categories: [数据点] 和 [坐标点] 一一对应，适用于离散数据。
    type: 'value',
    // 坐标轴名称
    name: 'mmol/L',
    // 坐标轴名称位置
    nameLocation: 'end',
    // 坐标轴名称样式
    nameTextStyle: {
      fontWeight: 'bolder',
    },
    // x轴最小值，今天 00:00 距离 1970-01-01 00:00:00 的毫秒数
    min: 0,
    // x轴最大值，今天 23:59 距离 1970-01-01 00:00:00 的毫秒数
    max: 15,
    // x轴刻度间隔，4h的毫秒数
    interval: 3,
    axisLine: {
      // 不显示 y 轴轴线
      show: false,  
    },
    splitLine: {
      lineStyle: {
        // 用虚线画 y 轴的辅助线
        type: 'dashed'  
      }
    }
  },
  // 分段颜色显示
  visualMap: {
    type: 'piecewise',
    top: 50,
    right: 10,
    pieces: [
      { gt: 10.0, color: '#ffeb3b', label: '> 10.0' },
      { gt: 3.9, lte: 10.0, color: '#2196F3', label: '3.9 ~ 10.0' },
      { gt: 0, lte: 3.9, color: '#ff0000', label: '< 3.9' },
    ]
  },
  series: [{
    type: 'line',
    data: data,
    markArea: {
        itemStyle: {
          color: 'rgba(33, 150, 243, 0.5)'
        },
        data: [
          [
            {
              yAxis: 4.0
            },
            {
              yAxis: 10.0
            }
          ]
        ]
      }
  }]
};
